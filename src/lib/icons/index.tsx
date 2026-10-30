"use client";

import React from "react";
import * as P from "@phosphor-icons/react";

export type IconWeight = P.IconWeight;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  weight?: IconWeight;
  color?: string;
  mirrored?: boolean;
  className?: string;
  strokeWidth?: number | string;
}

export type LucideIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;
export type IconComponent = LucideIcon;


function createIcon(Component: React.ComponentType<any>): LucideIcon {
  const WrappedIcon = React.forwardRef<SVGSVGElement, IconProps>(function PhosphorIconWrapper(
    { size, weight = "regular", className, strokeWidth, ...props },
    ref
  ) {
    return (
      <Component
        ref={ref}
        size={size}
        weight={weight}
        className={className}
        {...props}
      />
    );
  });
  return WrappedIcon;
}

// ── Medical & Clinical ──────────────────────────────────────────
export const Stethoscope = createIcon(P.Stethoscope);
export const Microscope = createIcon(P.Microscope);
export const HeartPulse = createIcon(P.Heartbeat);
export const Heart = createIcon(P.Heart);
export const Activity = createIcon(P.Pulse);
export const ActivitySquare = createIcon(P.Pulse);
export const Pill = createIcon(P.Pill);
export const Syringe = createIcon(P.Syringe);
export const Dna = createIcon(P.Dna);
export const Brain = createIcon(P.Brain);
export const BrainCircuit = createIcon(P.Brain);
export const Hospital = createIcon(P.Hospital);
export const Bandage = createIcon(P.FirstAid);
export const Accessibility = createIcon(P.Wheelchair);
export const TestTubes = createIcon(P.Flask);
export const BedDouble = createIcon(P.Bed);

// ── Holding, Law, Corporate & Trust ─────────────────────────────
export const Building2 = createIcon(P.Buildings);
export const Shield = createIcon(P.Shield);
export const ShieldCheck = createIcon(P.ShieldCheck);
export const ShieldAlert = createIcon(P.ShieldWarning);
export const ShieldPlus = createIcon(P.ShieldPlus);
export const Scale = createIcon(P.Scales);
export const Diamond = createIcon(P.Diamond);
export const Handshake = createIcon(P.Handshake);
export const HeartHandshake = createIcon(P.HandHeart);
export const HandHeart = createIcon(P.HandHeart);
export const Users = createIcon(P.Users);
export const Users2 = createIcon(P.UsersThree);
export const User = createIcon(P.User);
export const UserCheck = createIcon(P.UserCheck);
export const UserCog = createIcon(P.UserGear);
export const Briefcase = createIcon(P.Briefcase);
export const GraduationCap = createIcon(P.GraduationCap);
export const Award = createIcon(P.Certificate);
export const BadgeCheck = createIcon(P.SealCheck);
export const BadgeAlert = createIcon(P.WarningCircle);
export const Landmark = createIcon(P.Bank);
export const Lock = createIcon(P.Lock);
export const Home = createIcon(P.HouseLine);

// ── Communication, Global & Social ──────────────────────────────
export const Globe = createIcon(P.Globe);
export const Globe2 = createIcon(P.GlobeHemisphereWest);
export const Mail = createIcon(P.Envelope);
export const Phone = createIcon(P.Phone);
export const MapPin = createIcon(P.MapPin);
export const Send = createIcon(P.PaperPlaneTilt);
export const Share2 = createIcon(P.ShareNetwork);
export const MessageSquare = createIcon(P.ChatText);
export const Languages = createIcon(P.Translate);
export const Linkedin = createIcon(P.LinkedinLogo);
export const Instagram = createIcon(P.InstagramLogo);
export const Youtube = createIcon(P.YoutubeLogo);
export const QrCode = createIcon(P.QrCode);

// ── UI, Navigation & Controls ───────────────────────────────────
export const ArrowRight = createIcon(P.ArrowRight);
export const ArrowLeft = createIcon(P.ArrowLeft);
export const ArrowUpRight = createIcon(P.ArrowUpRight);
export const ChevronDown = createIcon(P.CaretDown);
export const ChevronUp = createIcon(P.CaretUp);
export const ChevronRight = createIcon(P.CaretRight);
export const ChevronLeft = createIcon(P.CaretLeft);
export const Check = createIcon(P.Check);
export const CheckCircle = createIcon(P.CheckCircle);
export const CheckCircle2 = createIcon(P.CheckCircle);
export const Plus = createIcon(P.Plus);
export const PlusCircle = createIcon(P.PlusCircle);
export const Minus = createIcon(P.Minus);
export const X = createIcon(P.X);
export const ExternalLink = createIcon(P.ArrowSquareOut);
export const Link2 = createIcon(P.Link);
export const Search = createIcon(P.MagnifyingGlass);
export const Menu = createIcon(P.List);
export const LogOut = createIcon(P.SignOut);
export const Loader2 = createIcon(P.SpinnerGap);
export const Info = createIcon(P.Info);
export const AlertCircle = createIcon(P.WarningCircle);
export const AlertTriangle = createIcon(P.Warning);
export const Sparkles = createIcon(P.Sparkle);
export const Star = createIcon(P.Star);
export const Settings = createIcon(P.Gear);
export const Cog = createIcon(P.Gear);
export const Wrench = createIcon(P.Wrench);
export const Eye = createIcon(P.Eye);

// ── Documents & Office ──────────────────────────────────────────
export const FileText = createIcon(P.FileText);
export const FileCheck = createIcon(P.File);
export const FileCheck2 = createIcon(P.FileDoc);
export const FileBadge = createIcon(P.Certificate);
export const FileSearch = createIcon(P.FileMagnifyingGlass);
export const ClipboardText = createIcon(P.ClipboardText);
export const ClipboardList = createIcon(P.ClipboardText);
export const ClipboardCheck = createIcon(P.ClipboardText);
export const ScrollText = createIcon(P.Scroll);
export const Printer = createIcon(P.Printer);
export const Receipt = createIcon(P.Receipt);
export const FolderKanban = createIcon(P.FolderSimple);
export const Quote = createIcon(P.Quotes);
export const Upload = createIcon(P.UploadSimple);

// ── Date, Time & Scheduling ─────────────────────────────────────
export const Clock = createIcon(P.Clock);
export const Calendar = createIcon(P.Calendar);
export const CalendarDays = createIcon(P.CalendarDots);
export const CalendarClock = createIcon(P.CalendarPlus);
export const CalendarCheck2 = createIcon(P.CalendarCheck);

// ── Logistics, Tech & Other ─────────────────────────────────────
export const Network = createIcon(P.TreeStructure);
export const Cpu = createIcon(P.Cpu);
export const Layers = createIcon(P.Stack);
export const Monitor = createIcon(P.Desktop);
export const BarChart3 = createIcon(P.ChartBar);
export const TrendingUp = createIcon(P.TrendUp);
export const Lightbulb = createIcon(P.Lightbulb);
export const Leaf = createIcon(P.Leaf);
export const Flame = createIcon(P.Flame);
export const Wind = createIcon(P.Wind);
export const Siren = createIcon(P.Siren);
export const Truck = createIcon(P.Truck);
export const Plane = createIcon(P.Airplane);
export const ShoppingCart = createIcon(P.ShoppingCart);
export const Store = createIcon(P.Storefront);
export const PackageCheck = createIcon(P.Package);
export const Tag = createIcon(P.Tag);
export const Target = createIcon(P.Target);
export const Scissors = createIcon(P.Scissors);
export const HardHat = createIcon(P.HardHat);
export const Flag = createIcon(P.Flag);
export const GitMerge = createIcon(P.GitMerge);
export const GitFork = createIcon(P.GitFork);
