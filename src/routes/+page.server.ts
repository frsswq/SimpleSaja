import { supabase } from '$lib/supabaseClient';

type Instrument = {
  id: number;
  name: string;
};

export const load = async () => {
  const { data, error } = await supabase.from('instruments').select<'instruments', Instrument>();

  if (error) {
    console.error('Error loading instruments:', error.message);
    return { instruments: [] };
  }

  return {
    instruments: data ?? []
  };
};
