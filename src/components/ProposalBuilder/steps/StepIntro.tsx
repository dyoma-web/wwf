import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";
import type { Proposal } from "../types";
import type { ProposalUpdater } from "../state";

type Props = { locale: Locale; proposal: Proposal; update: ProposalUpdater };

export function StepIntro({ locale, proposal, update }: Props) {
  return (
    <div style={{ display: "grid", gap: 22 }}>
      <p className="lede" style={{ margin: 0 }}>
        {t(locale, "pb_intro_lede")}
      </p>

      <Field
        label={t(locale, "pb_field_project_name")}
        hint={t(locale, "pb_field_project_name_hint")}
        required
      >
        <input
          type="text"
          className="pb-input"
          value={proposal.projectName}
          onChange={(e) => update({ projectName: e.target.value })}
          placeholder={t(locale, "pb_field_project_name_ph")}
          maxLength={140}
        />
      </Field>

      <Field
        label={t(locale, "pb_field_lead_org")}
        hint={t(locale, "pb_field_lead_org_hint")}
        required
      >
        <input
          type="text"
          className="pb-input"
          value={proposal.leadOrganization}
          onChange={(e) => update({ leadOrganization: e.target.value })}
          placeholder={t(locale, "pb_field_lead_org_ph")}
          maxLength={140}
        />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <Field label={t(locale, "pb_field_contact_name")}>
          <input
            type="text"
            className="pb-input"
            value={proposal.contactName}
            onChange={(e) => update({ contactName: e.target.value })}
            placeholder={t(locale, "pb_field_contact_name_ph")}
            maxLength={120}
          />
        </Field>
        <Field label={t(locale, "pb_field_contact_email")}>
          <input
            type="email"
            className="pb-input"
            value={proposal.contactEmail}
            onChange={(e) => update({ contactEmail: e.target.value })}
            placeholder="you@org.com"
            maxLength={140}
          />
        </Field>
      </div>
    </div>
  );
}

export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 600, fontSize: 14 }}>
        {label} {required && <span style={{ color: "var(--orange)" }}>*</span>}
      </span>
      {children}
      {hint && (
        <span style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.4 }}>{hint}</span>
      )}
    </label>
  );
}
