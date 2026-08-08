export const PREFILL_EVENT = "portfolio:prefill-service";

export type PrefillDetail = {
  service?: string;
  description?: string;
};

/**
 * Ask the contact form to adopt a service and description, then scroll to it.
 * Fired from anywhere on the page; the form listens for it on mount.
 */
export function prefillContact(detail: PrefillDetail) {
  window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
}
