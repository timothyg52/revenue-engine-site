"use client";

import {
  Mic,
  Sparkles,
  CalendarCheck,
  FileText,
  Timer,
  ShieldCheck,
  Database,
  UserCheck,
  LayoutDashboard,
  LineChart,
  PlugZap,
  Mail,
} from "lucide-react";
import { FrameworkBlock } from "@/components/FrameworkBlock";
import { VoiceMockup } from "@/components/VoiceMockup";
import { SmsMockup } from "@/components/SmsMockup";
import { DashboardMockup } from "@/components/DashboardMockup";

export function Frameworks() {
  return (
    <section
      id="frameworks"
      aria-label="Our frameworks"
      className="relative border-b border-line"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-5 py-24 md:py-32 md:gap-36">
        <FrameworkBlock
          label="Framework 01 — Voice"
          heading="Never miss another inbound call."
          copy="Your AI receptionist answers every call in under 2 rings, qualifies the lead, books the appointment, and drops the contact into your CRM. Works 24/7. Costs less than one part-time receptionist."
          features={[
            {
              icon: Mic,
              title: "Natural Voice",
              description: "Sounds human, handles interruptions, speaks your brand.",
            },
            {
              icon: Sparkles,
              title: "Smart Qualification",
              description: "Asks your exact intake questions before booking.",
            },
            {
              icon: CalendarCheck,
              title: "Instant Booking",
              description: "Syncs with Google Calendar, Calendly, or your CRM.",
            },
            {
              icon: FileText,
              title: "Full Transcripts",
              description: "Every call logged, searchable, sentiment-tagged.",
            },
          ]}
          visual={<VoiceMockup variant="hvacEmergency" />}
          side="right"
        />

        <FrameworkBlock
          label="Framework 02 — Messaging"
          heading="Turn cold leads into booked calls within 5 minutes."
          copy="Speed-to-lead is everything. Our SMS bot hits every new lead within 60 seconds, handles objections, and books them straight onto your calendar — even at 2 AM."
          features={[
            {
              icon: Timer,
              title: "Sub-Minute Response",
              description: "First touch in under 60 seconds, every time.",
            },
            {
              icon: ShieldCheck,
              title: "Objection Handling",
              description: "Trained on your sales scripts and common pushback.",
            },
            {
              icon: Database,
              title: "Database Reactivation",
              description: "Wakes up your old lead list and rebooks dead ones.",
            },
            {
              icon: UserCheck,
              title: "Handoff to Human",
              description: "Escalates hot leads to your team instantly.",
            },
          ]}
          visual={<SmsMockup />}
          side="left"
        />

        <FrameworkBlock
          label="Framework 03 — Operations"
          heading="Finally know which marketing dollar is actually printing."
          copy="Stop guessing where leads drop off. See every call, message, and booking in one view — with the exact ROI each system is producing for your business."
          features={[
            {
              icon: LayoutDashboard,
              title: "Unified Pipeline",
              description: "All leads, all sources, one place.",
            },
            {
              icon: LineChart,
              title: "Live ROI Tracking",
              description: "Know your cost per booked appointment in real time.",
            },
            {
              icon: PlugZap,
              title: "CRM Integration",
              description: "Works with GoHighLevel, HubSpot, Salesforce, etc.",
            },
            {
              icon: Mail,
              title: "Weekly Reports",
              description: "Performance summaries delivered every Monday.",
            },
          ]}
          visual={<DashboardMockup />}
          side="right"
        />
      </div>
    </section>
  );
}
