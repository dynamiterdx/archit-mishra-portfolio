import React from 'react';

export const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="mt-8 text-2xl font-semibold" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="mt-6 text-xl font-semibold" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<'p'>) => (
    <p className="mt-4 text-zinc-700 leading-relaxed" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className="mt-4 list-disc ml-6 space-y-1 text-zinc-700" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className="mt-4 list-decimal ml-6 space-y-1 text-zinc-700" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => (
    <code className="rounded bg-zinc-100 px-1 py-0.5" {...props} />
  ),
};
