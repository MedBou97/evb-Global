'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type State = {
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
      success: false,
    };
  }

  // Simulate sending the data, e.g., to an email service or database
  console.log('Received contact form submission:');
  console.log(validatedFields.data);

  // In a real application, you would add error handling for the submission process.
  // For this example, we'll always assume success.

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}
