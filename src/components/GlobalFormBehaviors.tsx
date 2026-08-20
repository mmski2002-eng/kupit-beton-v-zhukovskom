'use client';

import { useEffect } from 'react';

function formatRuPhone(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  let out = '+7';
  if (digits.length > 0) out += ` (${digits.slice(0, 3)}`;
  if (digits.length >= 3) out += ')';
  if (digits.length > 3) out += ` ${digits.slice(3, 6)}`;
  if (digits.length > 6) out += `-${digits.slice(6, 8)}`;
  if (digits.length > 8) out += `-${digits.slice(8, 10)}`;
  return out;
}

export function GlobalFormBehaviors() {
  useEffect(() => {
    function onInput(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.tagName !== 'INPUT' || target.type !== 'tel') return;
      const formatted = formatRuPhone(target.value);
      if (formatted !== target.value) {
        target.value = formatted;
        target.setSelectionRange(formatted.length, formatted.length);
      }
    }

    document.addEventListener('input', onInput);
    return () => document.removeEventListener('input', onInput);
  }, []);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const min = tomorrow.toISOString().slice(0, 10);
    document.querySelectorAll<HTMLInputElement>('input[type="date"]').forEach((el) => {
      el.min = min;
    });
  });

  return null;
}
