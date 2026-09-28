# NORTHLINE AUTO: research and redesign

Research date: 28 September 2026.

## Source audit

The provided HTML identifies itself as a portfolio concept. Its four fictional brands are Solvane, Kaion, Halveth and Dornik. The intended purchase journey is unusually useful for a landing page: needs-based discovery, up to three models compared on consistent criteria, base price plus factory package plus optional extra, and a test-drive request preview. These are retained.

The file combines multiple visual directions and cascading overrides in one document. It embeds a vehicle atlas, repeats the large landscape image, bundles animation scripts inline, and mixes content, pricing logic, DOM rendering and validation. Its gold/green palette, blurred floating navigation and lengthy hero compete with the practical tools. Navigation disappears on small screens without an equivalent menu. The catalogue is built with JavaScript-generated strings, and all copy is Russian.

## Competitor observations

These are qualitative design observations, not claims of measured conversion lift. No conversion analytics are available.

### Romans International
Source: https://www.romansinternational.com/

The homepage and stock search give direct access to vehicle prices, model year, colour and mileage. Separate buying and selling paths serve different intent. Team, history and preparation content support trust. Visual review shows a photographic, dark automotive presentation with spaced uppercase navigation and small utility text. For NORTHLINE: put the collection and visible prices close to the top; use readable mixed-case UI and fewer competing destinations.

### H.R. Owen
Source: https://www.hrowen.co.uk/

Approved-used search, marque navigation, locations and service access connect purchase to ownership. Warranty information is attached to the buying proposition. For NORTHLINE: answer coverage and servicing questions, but never transfer another dealer's warranty promises to a fictional business. This review used the rendered page content; it does not claim a full visual audit of this competitor.

### AMARI
Source: https://www.amarisupercars.com/

Stock has brand counts and detailed vehicle information. Separate sell-your-car, finance, warranty, FAQ and contact routes help visitors choose their next step. The selection is supported by factual specifications and photography. For a four-model concept, copying this navigation breadth would add empty destinations. Use one compact catalogue, comparison, transparent configuration and a single booking path instead. This review used rendered page content.

## Resulting information architecture

1. Hero: one proposition and direct collection CTA.
2. Four-brand strip: genuine breadth within the fictional catalogue.
3. Collection: body-style filters, visible prices, practical specs, detail action, comparison selection.
4. Needs-based finder: three questions, no lead gate, hard budget constraint, explicit compromise when the preferred body type is over budget.
5. Configuration: model selection, specs, benefits and trade-offs, complete price breakdown, optional extra, test-drive action.
6. Approach: three concrete buying principles, supported by landscape imagery.
7. FAQ: costs, comparison, trade-in, warranty and concept status.
8. Closing test-drive CTA and complete footer/privacy explanation.

## Visual system

Swiss-inspired left alignment, a disciplined grid, oversized close-set Geist headings, restrained Geist Mono labels, mineral background, forest-green ink and a soft chartreuse action colour. No gradients, fake star ratings or manufactured credentials. Clear rectangular controls replace pill-heavy glass. Four-card desktop catalogue becomes two columns on tablets and a readable single column on small phones. Light/dark tokens preserve the same hierarchy.

## Conversion and interaction decisions

- Browsing and quiz results require no personal data.
- At most three comparison items; disabled state explains the limit through the comparison count.
- Prices retain the original currency and exact arithmetic.
- Optional extras persist per model while the page is open; a quiz match clears its optional extra so the displayed match remains within budget.
- Comparison choices carry into the demo booking summary.
- Native dialogs contain focus and support Escape; focus returns to the opener.
- Forms have visible labels, validation and an honest completion state.
- Theme and form state are not persisted. No analytics is added.
- Motion communicates entry, interaction feedback and dialog transitions. Reduced-motion removes movement and smooth scrolling.

## Limits

This is a deployable, interactive portfolio website, not operational dealership infrastructure. Form requests deliberately remain local, as in the original. Fictional specifications are not product claims. Performance and browser verification results are recorded separately once run.
