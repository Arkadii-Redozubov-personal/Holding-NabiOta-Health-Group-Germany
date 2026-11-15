<?php
/**
 * Server-side form handler for NabiOta Health Group Germany
 * Handles both Contact and Career application forms (including CV attachments).
 * Sends notification to kontakt@nabiota-health-group-germany.de
 * and an automatic confirmation receipt to the sender.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

const HOLDING_EMAIL = 'kontakt@nabiota-health-group-germany.de';
const MAX_CV_BYTES = 10485760; // 10 MB
const ALLOWED_CV_EXTENSIONS = ['pdf', 'doc', 'docx'];

function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $value));
}

function encodeHeaderText(string $value): string
{
    return '=?UTF-8?B?' . base64_encode(sanitizeHeaderValue($value)) . '?=';
}

function normalizeText(?string $value): string
{
    if ($value === null) {
        return '';
    }
    return trim(strip_tags($value));
}

function sendPlainEmail(string $to, string $subject, string $body, array $headers): bool
{
    $headerString = implode("\r\n", $headers);
    $sent = @mail($to, $subject, $body, $headerString, '-f' . HOLDING_EMAIL);
    if (!$sent) {
        $sent = @mail($to, $subject, $body, $headerString);
    }
    return $sent;
}

function sendMultipartEmail(
    string $to,
    string $subject,
    string $body,
    array $baseHeaders,
    string $attachmentName,
    string $attachmentContent,
    string $attachmentMime
): bool {
    $boundary = '==NabiOta_Boundary_' . md5(uniqid((string)mt_rand(), true));

    $headers = array_merge($baseHeaders, [
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
    ]);

    $safeFileName = preg_replace('/[^a-zA-Z0-9._-]/', '_', basename($attachmentName)) ?: 'cv.pdf';
    $encodedFile = chunk_split(base64_encode($attachmentContent));

    $multipartBody = "--{$boundary}\r\n";
    $multipartBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $multipartBody .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $multipartBody .= $body . "\r\n\r\n";
    $multipartBody .= "--{$boundary}\r\n";
    $multipartBody .= "Content-Type: {$attachmentMime}; name=\"{$safeFileName}\"\r\n";
    $multipartBody .= "Content-Transfer-Encoding: base64\r\n";
    $multipartBody .= "Content-Disposition: attachment; filename=\"{$safeFileName}\"\r\n\r\n";
    $multipartBody .= $encodedFile . "\r\n";
    $multipartBody .= "--{$boundary}--\r\n";

    $headerString = implode("\r\n", $headers);
    $sent = @mail($to, $subject, $multipartBody, $headerString, '-f' . HOLDING_EMAIL);
    if (!$sent) {
        $sent = @mail($to, $subject, $multipartBody, $headerString);
    }
    return $sent;
}

// Parse JSON or multipart/form-data payload
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];
if (stripos($contentType, 'application/json') !== false) {
    $rawInput = file_get_contents('php://input');
    $decoded = json_decode($rawInput ?: '', true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
}
if (empty($data)) {
    $data = $_POST;
}

// Honeypot anti-spam check
if (!empty($data['website_url']) || !empty($data['hp_field'])) {
    echo json_encode(['success' => true]);
    exit;
}

$formType = ($data['formType'] ?? 'contact') === 'career' ? 'career' : 'contact';
$locale = strtolower(substr(normalizeText((string)($data['locale'] ?? 'de')), 0, 2));
if (!in_array($locale, ['de', 'en', 'ru', 'tr', 'ar', 'uz'], true)) {
    $locale = 'de';
}

$name = normalizeText((string)($data['fullName'] ?? $data['name'] ?? ''));
$email = sanitizeHeaderValue((string)($data['email'] ?? ''));
$phone = normalizeText((string)($data['phone'] ?? ''));
$company = normalizeText((string)($data['company'] ?? ''));
$subject = normalizeText((string)($data['subject'] ?? ''));
$position = normalizeText((string)($data['position'] ?? ''));
$message = normalizeText((string)($data['message'] ?? ''));

$localizedErrors = [
    'de' => [
        'name' => 'Bitte geben Sie Ihren Namen ein.',
        'email' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        'message' => 'Bitte geben Sie eine Nachricht ein.',
        'position' => 'Bitte wählen Sie eine gewünschte Position aus.',
        'fileSize' => 'Die Datei ist zu groß (maximal 10 MB erlaubt).',
        'fileType' => 'Ungültiges Dateiformat. Erlaubt sind nur PDF-, DOC- oder DOCX-Dateien.',
        'mailFailed' => 'Die Nachricht konnte serverseitig nicht gesendet werden. Bitte versuchen Sie es telefonisch oder direkt per E-Mail.',
    ],
    'en' => [
        'name' => 'Please enter your name.',
        'email' => 'Please enter a valid email address.',
        'message' => 'Please enter your message.',
        'position' => 'Please select a desired position.',
        'fileSize' => 'The uploaded file is too large (maximum 10 MB allowed).',
        'fileType' => 'Unsupported file type. Only PDF, DOC, or DOCX files are allowed.',
        'mailFailed' => 'Unable to send email at the moment. Please contact us directly via phone or email.',
    ],
    'ru' => [
        'name' => 'Пожалуйста, укажите ваше имя.',
        'email' => 'Пожалуйста, введите корректный e-mail.',
        'message' => 'Пожалуйста, напишите ваше сообщение.',
        'position' => 'Пожалуйста, выберите интересующую позицию.',
        'fileSize' => 'Файл слишком большой (допускается максимум 10 МБ).',
        'fileType' => 'Недопустимый формат файла. Разрешены только PDF, DOC или DOCX.',
        'mailFailed' => 'Не удалось отправить письмо. Пожалуйста, свяжитесь с нами по телефону или напрямую по e-mail.',
    ],
    'tr' => [
        'name' => 'Lütfen adınızı girin.',
        'email' => 'Lütfen geçerli bir e-posta adresi girin.',
        'message' => 'Lütfen mesajınızı yazın.',
        'position' => 'Lütfen bir pozisyon seçin.',
        'fileSize' => 'Dosya boyutu çok büyük (maksimum 10 MB).',
        'fileType' => 'Geçersiz dosya formatı. Yalnızca PDF, DOC veya DOCX kabul edilir.',
        'mailFailed' => 'Mesaj şu anda gönderilemedi. Lütfen telefon veya e-posta ile iletişime geçin.',
    ],
    'ar' => [
        'name' => 'يرجى إدخال الاسم.',
        'email' => 'يرجى إدخال بريد إلكتروني صحيح.',
        'message' => 'يرجى كتابة رسالتك.',
        'position' => 'يرجى اختيار الوظيفة المطلوبة.',
        'fileSize' => 'حجم الملف كبير جداً (الحد الأقصى 10 ميغابايت).',
        'fileType' => 'صيغة الملف غير مدعومة. المسموح فقط: PDF أو DOC أو DOCX.',
        'mailFailed' => 'تعذر إرسال الرسالة حالياً. يرجى التواصل معنا عبر الهاتف أو البريد الإلكتروني.',
    ],
    'uz' => [
        'name' => 'Iltimos, ismingizni kiriting.',
        'email' => 'Iltimos, to‘g‘ri e-mail manzilini kiriting.',
        'message' => 'Iltimos, xabaringizni yozing.',
        'position' => 'Iltimos, lavozimni tanlang.',
        'fileSize' => 'Fayl hajmi juda katta (maksimal 10 MB).',
        'fileType' => 'Fayl formati qo‘llab-quvvatlanmaydi. Faqat PDF, DOC yoki DOCX ruxsat etiladi.',
        'mailFailed' => 'Xabarni yuborishda xatolik yuz berdi. Iltimos, telefon yoki e-mail orqali bog‘laning.',
    ],
];
$err = $localizedErrors[$locale];

if ($name === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $err['name']]);
    exit;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $err['email']]);
    exit;
}

if ($formType === 'contact' && $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $err['message']]);
    exit;
}

if ($formType === 'career' && $position === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $err['position']]);
    exit;
}

// Optional CV upload validation for career form
$attachmentName = '';
$attachmentContent = '';
$attachmentMime = 'application/octet-stream';

if ($formType === 'career' && isset($_FILES['cv']) && $_FILES['cv']['error'] !== UPLOAD_ERR_NO_FILE) {
    $fileInfo = $_FILES['cv'];
    if ($fileInfo['error'] === UPLOAD_ERR_INI_SIZE || $fileInfo['error'] === UPLOAD_ERR_FORM_SIZE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => $err['fileSize']]);
        exit;
    }
    if ($fileInfo['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($fileInfo['tmp_name'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => $err['fileType']]);
        exit;
    }
    if ((int)$fileInfo['size'] > MAX_CV_BYTES) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => $err['fileSize']]);
        exit;
    }

    $ext = strtolower(pathinfo((string)$fileInfo['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ALLOWED_CV_EXTENSIONS, true)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => $err['fileType']]);
        exit;
    }

    $attachmentName = (string)$fileInfo['name'];
    $attachmentContent = file_get_contents($fileInfo['tmp_name']) ?: '';
    $attachmentMime = match ($ext) {
        'pdf' => 'application/pdf',
        'doc' => 'application/msword',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        default => 'application/octet-stream',
    };
}

$currentDateTime = date('d.m.Y, H:i') . ' Uhr';

// -------------------------------------------------------------
// 1. Notification Email to Holding
// -------------------------------------------------------------
$holdingSubjectText = $formType === 'career'
    ? "Neue Bewerbung über nabiota-health-group-germany.de: {$name} ({$position})"
    : "Neue Kontaktanfrage über nabiota-health-group-germany.de: {$name}";

$holdingSubject = encodeHeaderText($holdingSubjectText);

$holdingLines = [
    $formType === 'career'
        ? 'Neue Bewerbung über das Karriereportal auf nabiota-health-group-germany.de:'
        : 'Neue Nachricht über das Kontaktformular auf nabiota-health-group-germany.de:',
    '',
    'Name:         ' . $name,
    'E-Mail:       ' . $email,
    'Telefon:      ' . ($phone !== '' ? $phone : 'Nicht angegeben'),
];

if ($formType === 'career') {
    $holdingLines[] = 'Position:     ' . $position;
    $holdingLines[] = 'Lebenslauf:   ' . ($attachmentName !== '' ? $attachmentName . ' (im Anhang)' : 'Keine Datei angehängt');
} else {
    $holdingLines[] = 'Organisation: ' . ($company !== '' ? $company : 'Nicht angegeben');
    $holdingLines[] = 'Betreff:      ' . ($subject !== '' ? $subject : 'Allgemeine Anfrage');
}

$holdingLines[] = 'Sprache:      ' . strtoupper($locale);
$holdingLines[] = 'Datum:        ' . $currentDateTime;
$holdingLines[] = '';
$holdingLines[] = 'Nachricht:';
$holdingLines[] = '--------------------------------------------------';
$holdingLines[] = $message !== '' ? $message : '(Keine zusätzliche Nachricht angegeben)';
$holdingLines[] = '--------------------------------------------------';
$holdingLines[] = '';
$holdingLines[] = 'Hinweis: Sie können direkt auf diese E-Mail antworten, um dem Absender zu schreiben.';

$holdingBody = implode("\r\n", $holdingLines);

$holdingBaseHeaders = [
    'MIME-Version: 1.0',
    'From: ' . encodeHeaderText('NabiOta® Health Group Website') . ' <' . HOLDING_EMAIL . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
];

if ($attachmentContent !== '') {
    $sentToHolding = sendMultipartEmail(
        HOLDING_EMAIL,
        $holdingSubject,
        $holdingBody,
        $holdingBaseHeaders,
        $attachmentName,
        $attachmentContent,
        $attachmentMime
    );
} else {
    $sentToHolding = sendPlainEmail(
        HOLDING_EMAIL,
        $holdingSubject,
        $holdingBody,
        array_merge($holdingBaseHeaders, [
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
        ])
    );
}

if (!$sentToHolding) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $err['mailFailed']]);
    exit;
}

// -------------------------------------------------------------
// 2. Auto-Reply Confirmation to Sender / Applicant
// -------------------------------------------------------------
$autoReplyTemplates = [
    'de' => [
        'subjectContact' => 'Ihre Anfrage bei der NabiOta® Health Group Germany GmbH',
        'subjectCareer' => 'Ihre Bewerbung bei der NabiOta® Health Group Germany GmbH',
        'greeting' => 'Sehr geehrte(r) ' . $name . ',',
        'introContact' => 'vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erfolgreich erhalten und werden Ihr Anliegen schnellstmöglich bearbeiten.',
        'introCareer' => 'vielen Dank für Ihr Interesse und Ihre Bewerbung bei der NabiOta® Health Group Germany GmbH. Wir haben Ihre Unterlagen erhalten und melden uns nach sorgfältiger Prüfung schnellstmöglich bei Ihnen.',
        'summaryTitle' => 'Zusammenfassung Ihrer Angaben:',
        'noteTitle' => 'Wichtiger Hinweis:',
        'noteBody' => "Dieses Formular ist nicht für akute medizinische Notfälle bestimmt.\r\nIn dringenden medizinischen Notfällen wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst unter 116 117 oder den Notruf 112.",
        'regards' => 'Mit freundlichen Grüßen,',
        'locationsTitle' => 'Unsere Standorte:',
    ],
    'en' => [
        'subjectContact' => 'Your Inquiry at NabiOta® Health Group Germany GmbH',
        'subjectCareer' => 'Your Application at NabiOta® Health Group Germany GmbH',
        'greeting' => 'Dear ' . $name . ',',
        'introContact' => 'Thank you for contacting us. We have received your message and our team will respond to your inquiry as soon as possible.',
        'introCareer' => 'Thank you for your application to NabiOta® Health Group Germany GmbH. We have received your details and will review them carefully.',
        'summaryTitle' => 'Summary of your submission:',
        'noteTitle' => 'Important Note:',
        'noteBody' => "This form is not intended for urgent medical emergencies.\r\nIn acute emergencies, please contact medical emergency services (112) or the on-call service (116 117 in Germany).",
        'regards' => 'Kind regards,',
        'locationsTitle' => 'Our Locations:',
    ],
    'ru' => [
        'subjectContact' => 'Ваше обращение в NabiOta® Health Group Germany GmbH',
        'subjectCareer' => 'Ваш отклик на вакансию в NabiOta® Health Group Germany GmbH',
        'greeting' => 'Здравствуйте, ' . $name . ',',
        'introContact' => 'Благодарим вас за обращение в NabiOta® Health Group Germany GmbH. Мы успешно получили ваше сообщение и свяжемся с вами в ближайшее время.',
        'introCareer' => 'Благодарим вас за отклик и интерес к работе в NabiOta® Health Group Germany GmbH. Мы получили ваши данные и рассмотрим их в ближайшее время.',
        'summaryTitle' => 'Сводка ваших данных:',
        'noteTitle' => 'Важная информация:',
        'noteBody' => "Данная форма не предназначена для экстренной медицинской помощи.\r\nВ неотложных случаях в Германии обращайтесь по номеру дежурной медицинской службы 116 117 или экстренной помощи 112.",
        'regards' => 'С уважением,',
        'locationsTitle' => 'Наши локации:',
    ],
    'tr' => [
        'subjectContact' => 'NabiOta® Health Group Germany GmbH İletişim Talebiniz',
        'subjectCareer' => 'NabiOta® Health Group Germany GmbH Kariyer Başvurunuz',
        'greeting' => 'Sayın ' . $name . ',',
        'introContact' => 'Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınız tarafımıza ulaştı; ekibimiz en kısa sürede size dönüş yapacaktır.',
        'introCareer' => 'NabiOta® Health Group Germany GmbH başvurunuz için teşekkür ederiz. Başvurunuz değerlendirilmek üzere ekibimize iletildi.',
        'summaryTitle' => 'Bilgilerinizin özeti:',
        'noteTitle' => 'Önemli Bilgilendirme:',
        'noteBody' => "Bu form acil tıbbi durumlar için uygun değildir.\r\nAcil durumlarda lütfen Almanya acil servisini (112) veya nöbetçi doktor hattını (116 117) arayınız.",
        'regards' => 'Saygılarımızla,',
        'locationsTitle' => 'Lokasyonlarımız:',
    ],
    'ar' => [
        'subjectContact' => 'تم استلام رسالتكم - مجموعة NabiOta® الصحية ألمانيا',
        'subjectCareer' => 'تم استلام طلب التوظيف - مجموعة NabiOta® الصحية ألمانيا',
        'greeting' => 'تحية طيبة ' . $name . '،',
        'introContact' => 'شكراً لتواصلكم مع مجموعة NabiOta® Health Group Germany GmbH. لقد تم استلام رسالتكم بنجاح وسيتواصل معكم فريقنا في أقرب وقت.',
        'introCareer' => 'شكراً لاهتمامكم وتقديمكم للانضمام إلى مجموعة NabiOta® Health Group Germany GmbH. تم استلام طلبكم بنجاح وسيتم مراجعته.',
        'summaryTitle' => 'ملخص البيانات المرسلة:',
        'noteTitle' => 'ملاحظة هامة:',
        'noteBody' => "هذا النموذج غير مخصص للحالات الطبية الطارئة.\r\nفي حالات الطوارئ يرجى الاتصال مباشرة برقم الطوارئ 112 أو خدمة المناوبة الطبية 116 117 في ألمانيا.",
        'regards' => 'مع أطيب التحيات،',
        'locationsTitle' => 'مواقعنا:',
    ],
    'uz' => [
        'subjectContact' => 'Murojaatingiz qabul qilindi - NabiOta® Health Group Germany GmbH',
        'subjectCareer' => 'Arizangiz qabul qilindi - NabiOta® Health Group Germany GmbH',
        'greeting' => 'Hurmatli ' . $name . ',',
        'introContact' => 'NabiOta® Health Group Germany GmbH kompaniyasiga murojaat qilganingiz uchun rahmat. Xabaringiz muvaffaqiyatli qabul qilindi va tez orada siz bilan bog‘lanamiz.',
        'introCareer' => 'NabiOta® Health Group Germany GmbH jamoasiga qiziqish bildirganingiz va arizangiz uchun rahmat. Hujjatlaringiz ko‘rib chiqish uchun qabul qilindi.',
        'summaryTitle' => 'Yuborilgan ma’lumotlar:',
        'noteTitle' => 'Muhim eslatma:',
        'noteBody' => "Ushbu shakl shoshilinch tibbiy yordam uchun mo‘ljallanmagan.\r\nFavqulodda holatlarda Germaniyada 116 117 (navbatchi shifokor) yoki 112 (tez yordam) raqamiga murojaat qiling.",
        'regards' => 'Hurmat bilan,',
        'locationsTitle' => 'Bizning manzillar:',
    ],
];

$tpl = $autoReplyTemplates[$locale];
$replySubject = encodeHeaderText($formType === 'career' ? $tpl['subjectCareer'] : $tpl['subjectContact']);

$replyLines = [
    $tpl['greeting'],
    '',
    $formType === 'career' ? $tpl['introCareer'] : $tpl['introContact'],
    '',
    $tpl['summaryTitle'],
    '• Name:      ' . $name,
    '• E-Mail:    ' . $email,
];

if ($phone !== '') {
    $replyLines[] = '• Telefon:   ' . $phone;
}
if ($formType === 'career' && $position !== '') {
    $replyLines[] = '• Position:  ' . $position;
}
if ($formType === 'contact' && $company !== '') {
    $replyLines[] = '• Praxis/Org:' . ' ' . $company;
}
if ($formType === 'contact' && $subject !== '') {
    $replyLines[] = '• Betreff:   ' . $subject;
}

$replyLines[] = '• Datum:     ' . $currentDateTime;
$replyLines[] = '';
$replyLines[] = $tpl['noteTitle'];
$replyLines[] = $tpl['noteBody'];
$replyLines[] = '';
$replyLines[] = $tpl['regards'];
$replyLines[] = 'NabiOta® Health Group Germany GmbH';
$replyLines[] = '';
$replyLines[] = $tpl['locationsTitle'];
$replyLines[] = '• Holding-Hauptsitz: Aachener Straße 114, 41061 Mönchengladbach | Tel: +49 2161 9170016';
$replyLines[] = '• Standort Mönchengladbach: Bismarckstr. 106, 41061 Mönchengladbach | Tel: +49 2161 9170017';
$replyLines[] = '• Standort Viersen: Hauptstr. 76, 41747 Viersen | Tel: +49 2161 9170017';
$replyLines[] = '• Standort Düsseldorf: Münsterstr. 519, 40472 Düsseldorf';
$replyLines[] = '';
$replyLines[] = 'E-Mail: ' . HOLDING_EMAIL;
$replyLines[] = 'Internet: https://www.nabiota-health-group-germany.de';

$replyBody = implode("\r\n", $replyLines);

$replyHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ' . encodeHeaderText('NabiOta® Health Group Germany') . ' <' . HOLDING_EMAIL . '>',
    'Reply-To: ' . HOLDING_EMAIL,
    'X-Mailer: PHP/' . phpversion(),
];

sendPlainEmail($email, $replySubject, $replyBody, $replyHeaders);

echo json_encode(['success' => true]);

