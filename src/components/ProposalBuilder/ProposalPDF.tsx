/**
 * Documento PDF generado por @react-pdf/renderer.
 *
 * Se importa con dynamic import desde StepReview para que no entre al bundle
 * principal (react-pdf pesa ~500KB gzipped).
 *
 * No usa la fuente WWF.otf (eso requeriría registrarla server-side y aún así
 * @react-pdf/renderer tiene rendering limitations con OTF). Usamos las Helvetica
 * embebidas por default — sólidas y portables.
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { Proposal } from "./types";
import {
  BIOMES,
  PROJECT_TYPES,
  SCALES,
  STAKEHOLDER_ROLES,
  ENGAGEMENT_LEVELS,
  SAFEGUARDS,
} from "./presets";
import { t } from "@/i18n/dict";
import type { Locale } from "@/i18n/config";

const C = {
  ink: "#1d1d1b",
  muted: "#6b6a61",
  line: "#d6d3c8",
  paper: "#f4f2eb",
  orange: "#f07d00",
};

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    color: C.ink,
    lineHeight: 1.5,
  },
  cover: {
    paddingTop: 90,
    paddingHorizontal: 48,
    paddingBottom: 48,
    fontFamily: "Helvetica",
    color: C.ink,
  },
  coverEyebrow: {
    fontSize: 9,
    letterSpacing: 1.5,
    color: C.orange,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
  },
  coverTitle: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.15,
    marginBottom: 18,
  },
  coverMeta: {
    fontSize: 11,
    color: C.muted,
    marginBottom: 4,
  },
  coverFooter: {
    position: "absolute",
    bottom: 48,
    left: 48,
    right: 48,
    fontSize: 9,
    color: C.muted,
    borderTop: `1pt solid ${C.line}`,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginTop: 18,
    marginBottom: 10,
    color: C.ink,
  },
  h2: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginTop: 14,
    marginBottom: 6,
    color: C.ink,
  },
  eyebrow: {
    fontSize: 8.5,
    letterSpacing: 1.2,
    color: C.orange,
    fontFamily: "Helvetica-Bold",
    marginTop: 16,
    marginBottom: 4,
  },
  p: {
    fontSize: 10.5,
    marginBottom: 6,
  },
  label: {
    fontSize: 9,
    color: C.muted,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  kvRow: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 4,
    borderBottom: `0.5pt solid ${C.line}`,
  },
  kvKey: {
    width: 130,
    fontSize: 9,
    color: C.muted,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  kvVal: {
    flex: 1,
    fontSize: 10,
  },
  table: {
    marginTop: 8,
    borderTop: `0.5pt solid ${C.line}`,
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    borderBottom: `0.5pt solid ${C.line}`,
    paddingVertical: 5,
  },
  trh: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 6,
    backgroundColor: C.paper,
    paddingHorizontal: 4,
  },
  th: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  td: {
    fontSize: 9.5,
    paddingHorizontal: 4,
  },
  totalRow: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 6,
    borderTop: `1pt solid ${C.ink}`,
    marginTop: 4,
  },
  totalCell: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    paddingHorizontal: 4,
  },
  badge: {
    fontSize: 9,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: C.paper,
    color: C.ink,
    marginRight: 4,
    marginBottom: 4,
  },
  pillBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
  },
  riskCard: {
    border: `0.5pt solid ${C.line}`,
    padding: 10,
    marginBottom: 6,
  },
  riskMeta: {
    fontSize: 8.5,
    color: C.muted,
    marginTop: 2,
  },
  pageNumber: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 8.5,
    color: C.muted,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

type Props = { proposal: Proposal; locale: Locale };

export function ProposalPDF({ proposal, locale }: Props) {
  const fmt = (n: number) =>
    n.toLocaleString(locale === "es" ? "es-CO" : locale === "fr" ? "fr-FR" : "en-US", {
      maximumFractionDigits: 0,
    });

  const biome = BIOMES.find((b) => b.id === proposal.biome);
  const scale = SCALES.find((s) => s.id === proposal.scale);
  const ptype = PROJECT_TYPES.find((p) => p.id === proposal.projectType);

  let direct = 0;
  const yearTotals = Array(proposal.durationYears).fill(0);
  for (const l of proposal.budgetLines) {
    for (let y = 0; y < proposal.durationYears; y++) {
      const v = l.amounts[y] || 0;
      direct += v;
      yearTotals[y] += v;
    }
  }
  const overhead = direct * (proposal.overheadPct / 100);
  const grand = direct + overhead;

  const checkedSG = SAFEGUARDS.filter((sg) => proposal.safeguards[sg.id]);

  const today = new Date().toISOString().slice(0, 10);
  const yearLabel = (locale === "es" ? "AÑO" : locale === "fr" ? "AN" : "YR");

  return (
    <Document title={proposal.projectName || "Proposal"} author={proposal.leadOrganization}>
      {/* ===== Cover ===== */}
      <Page size="A4" style={styles.cover}>
        <Text style={styles.coverEyebrow}>{t(locale, "pb_pdf_eyebrow")}</Text>
        <Text style={styles.coverTitle}>{proposal.projectName || t(locale, "pb_review_untitled")}</Text>

        {proposal.leadOrganization && (
          <Text style={styles.coverMeta}>{proposal.leadOrganization}</Text>
        )}
        {(proposal.contactName || proposal.contactEmail) && (
          <Text style={styles.coverMeta}>
            {[proposal.contactName, proposal.contactEmail].filter(Boolean).join(" · ")}
          </Text>
        )}
        {biome && proposal.country && (
          <Text style={[styles.coverMeta, { marginTop: 16 }]}>
            {t(locale, biome.key)} · {proposal.country} · {proposal.durationYears}{" "}
            {proposal.durationYears === 1 ? t(locale, "pb_year_lower") : t(locale, "pb_years_lower")}
          </Text>
        )}
        {ptype && (
          <Text style={styles.coverMeta}>{t(locale, ptype.key)}</Text>
        )}

        <View style={styles.coverFooter}>
          <Text>{t(locale, "pb_pdf_generated")} {today}</Text>
          <Text>{t(locale, "pb_pdf_powered")}</Text>
        </View>
      </Page>

      {/* ===== Content ===== */}
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.h1}>{t(locale, "pb_pdf_section_summary")}</Text>

        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_lead_org")}</Text>
          <Text style={styles.kvVal}>{proposal.leadOrganization || "—"}</Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_contact_name")}</Text>
          <Text style={styles.kvVal}>
            {[proposal.contactName, proposal.contactEmail].filter(Boolean).join(" · ") || "—"}
          </Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_biome")}</Text>
          <Text style={styles.kvVal}>{biome ? t(locale, biome.key) : "—"}</Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_country")}</Text>
          <Text style={styles.kvVal}>{proposal.country || "—"}</Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_scale")}</Text>
          <Text style={styles.kvVal}>{scale ? t(locale, scale.key) : "—"}</Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_duration")}</Text>
          <Text style={styles.kvVal}>
            {proposal.durationYears}{" "}
            {proposal.durationYears === 1 ? t(locale, "pb_year_lower") : t(locale, "pb_years_lower")}
          </Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_field_project_type")}</Text>
          <Text style={styles.kvVal}>{ptype ? t(locale, ptype.key) : "—"}</Text>
        </View>
        <View style={styles.kvRow}>
          <Text style={styles.kvKey}>{t(locale, "pb_pdf_total_label")}</Text>
          <Text style={styles.kvVal}>USD {fmt(grand)}</Text>
        </View>

        {/* Impact */}
        <Text style={styles.h1}>{t(locale, "pb_pdf_section_impact")}</Text>
        <Text style={styles.p}>{proposal.impactStatement || "—"}</Text>

        {(proposal.sdgs.length > 0 || proposal.alignedNDC || proposal.alignedNBSAP) && (
          <>
            <Text style={styles.eyebrow}>{t(locale, "pb_pdf_alignment")}</Text>
            <View style={styles.pillBox}>
              {proposal.sdgs.map((n) => (
                <Text key={n} style={styles.badge}>
                  SDG {n}
                </Text>
              ))}
              {proposal.alignedNDC && (
                <Text style={[styles.badge, { backgroundColor: C.orange, color: "#fff" }]}>NDC</Text>
              )}
              {proposal.alignedNBSAP && (
                <Text style={[styles.badge, { backgroundColor: C.orange, color: "#fff" }]}>NBSAP</Text>
              )}
            </View>
          </>
        )}

        {/* Activities */}
        {proposal.activities.length > 0 && (
          <>
            <Text style={styles.h1}>{t(locale, "pb_pdf_section_activities")}</Text>
            <View style={styles.table}>
              <View style={styles.trh}>
                <Text style={[styles.th, { flex: 2 }]}>{t(locale, "pb_field_activity_name")}</Text>
                <Text style={[styles.th, { flex: 2 }]}>{t(locale, "pb_field_deliverable")}</Text>
                <Text style={[styles.th, { width: 70, textAlign: "right" }]}>
                  {t(locale, "pb_pdf_years")}
                </Text>
              </View>
              {proposal.activities.map((a) => (
                <View key={a.id} style={styles.tr}>
                  <Text style={[styles.td, { flex: 2 }]}>{a.name || "—"}</Text>
                  <Text style={[styles.td, { flex: 2 }]}>{a.deliverable || "—"}</Text>
                  <Text style={[styles.td, { width: 70, textAlign: "right" }]}>
                    {yearLabel}{a.yearStart}–{yearLabel}{a.yearEnd}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Beneficiaries & Stakeholders */}
        {(proposal.primaryBeneficiaries || proposal.stakeholders.length > 0) && (
          <>
            <Text style={styles.h1}>{t(locale, "pb_pdf_section_stakeholders")}</Text>
            {proposal.primaryBeneficiaries && (
              <>
                <Text style={styles.label}>{t(locale, "pb_field_beneficiaries")}</Text>
                <Text style={styles.p}>{proposal.primaryBeneficiaries}</Text>
                {proposal.beneficiaryCount > 0 && (
                  <Text style={[styles.p, { color: C.muted }]}>
                    ~ {fmt(proposal.beneficiaryCount)} {t(locale, "pb_pdf_beneficiaries_word")}
                  </Text>
                )}
              </>
            )}
            {proposal.stakeholders.length > 0 && (
              <View style={styles.table}>
                <View style={styles.trh}>
                  <Text style={[styles.th, { flex: 2 }]}>{t(locale, "pb_pdf_name")}</Text>
                  <Text style={[styles.th, { flex: 1 }]}>{t(locale, "pb_pdf_role")}</Text>
                  <Text style={[styles.th, { flex: 1 }]}>{t(locale, "pb_pdf_engagement")}</Text>
                </View>
                {proposal.stakeholders.map((s) => {
                  const role = STAKEHOLDER_ROLES.find((r) => r.id === s.role);
                  const eng = ENGAGEMENT_LEVELS.find((e) => e.id === s.engagement);
                  return (
                    <View key={s.id} style={styles.tr}>
                      <Text style={[styles.td, { flex: 2 }]}>{s.name || "—"}</Text>
                      <Text style={[styles.td, { flex: 1 }]}>
                        {role ? t(locale, role.key) : "—"}
                      </Text>
                      <Text style={[styles.td, { flex: 1 }]}>{eng ? t(locale, eng.key) : "—"}</Text>
                    </View>
                  );
                })}
              </View>
            )}
          </>
        )}

        {/* Budget */}
        {proposal.budgetLines.length > 0 && (
          <>
            <Text style={styles.h1}>{t(locale, "pb_pdf_section_budget")}</Text>
            <View style={styles.table}>
              <View style={styles.trh}>
                <Text style={[styles.th, { flex: 2 }]}>{t(locale, "pb_budget_category")}</Text>
                {yearTotals.map((_, i) => (
                  <Text key={i} style={[styles.th, { width: 55, textAlign: "right" }]}>
                    {yearLabel}{i + 1}
                  </Text>
                ))}
                <Text style={[styles.th, { width: 70, textAlign: "right" }]}>
                  {t(locale, "pb_budget_subtotal")}
                </Text>
              </View>
              {proposal.budgetLines.map((l) => {
                const subtotal = l.amounts.reduce((a, b) => a + b, 0);
                return (
                  <View key={l.id} style={styles.tr}>
                    <Text style={[styles.td, { flex: 2 }]}>{l.category || "—"}</Text>
                    {l.amounts.map((a, i) => (
                      <Text key={i} style={[styles.td, { width: 55, textAlign: "right" }]}>
                        {a ? fmt(a) : "—"}
                      </Text>
                    ))}
                    <Text style={[styles.td, { width: 70, textAlign: "right", fontFamily: "Helvetica-Bold" }]}>
                      {fmt(subtotal)}
                    </Text>
                  </View>
                );
              })}
              <View style={styles.totalRow}>
                <Text style={[styles.totalCell, { flex: 2 }]}>
                  {t(locale, "pb_budget_subtotals")}
                </Text>
                {yearTotals.map((v, i) => (
                  <Text key={i} style={[styles.totalCell, { width: 55, textAlign: "right" }]}>
                    {fmt(v)}
                  </Text>
                ))}
                <Text style={[styles.totalCell, { width: 70, textAlign: "right" }]}>
                  {fmt(direct)}
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 14, padding: 10, backgroundColor: C.paper }}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                <Text style={{ fontSize: 10 }}>{t(locale, "pb_budget_direct")}</Text>
                <Text style={{ fontSize: 10 }}>USD {fmt(direct)}</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                <Text style={{ fontSize: 10 }}>
                  {t(locale, "pb_budget_overhead")} ({proposal.overheadPct}%)
                </Text>
                <Text style={{ fontSize: 10 }}>USD {fmt(overhead)}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 6,
                  borderTop: `0.5pt solid ${C.line}`,
                }}
              >
                <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold" }}>
                  {t(locale, "pb_budget_total")}
                </Text>
                <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold" }}>USD {fmt(grand)}</Text>
              </View>
            </View>
          </>
        )}

        {/* Risks */}
        {proposal.risks.length > 0 && (
          <>
            <Text style={styles.h1}>{t(locale, "pb_pdf_section_risks")}</Text>
            {proposal.risks.map((r, i) => (
              <View key={r.id} style={styles.riskCard} wrap={false}>
                <Text style={{ fontSize: 10.5, fontFamily: "Helvetica-Bold", marginBottom: 4 }}>
                  {t(locale, "pb_risk")} {i + 1}: {r.description || "—"}
                </Text>
                <Text style={styles.riskMeta}>
                  {t(locale, "pb_field_likelihood")}: {t(locale, `pb_${r.likelihood}`)} ·{" "}
                  {t(locale, "pb_field_impact_lvl")}: {t(locale, `pb_${r.impact}`)}
                </Text>
                {r.mitigation && (
                  <Text style={[styles.p, { marginTop: 4 }]}>
                    <Text style={{ fontFamily: "Helvetica-Bold" }}>
                      {t(locale, "pb_field_mitigation")}:{" "}
                    </Text>
                    {r.mitigation}
                  </Text>
                )}
              </View>
            ))}
          </>
        )}

        {/* Safeguards */}
        {checkedSG.length > 0 && (
          <>
            <Text style={styles.h1}>{t(locale, "pb_pdf_section_safeguards")}</Text>
            {checkedSG.map((sg) => (
              <View key={sg.id} style={styles.kvRow}>
                <Text style={[styles.kvKey, { width: 180 }]}>{t(locale, sg.key)}</Text>
                <Text style={styles.kvVal}>{t(locale, sg.descKey)}</Text>
              </View>
            ))}
          </>
        )}

        {/* Page numbers */}
        <View style={styles.pageNumber} fixed>
          <Text>{proposal.projectName || t(locale, "pb_review_untitled")}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
