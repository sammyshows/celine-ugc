import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'rmfLmrdrE7v7wxbbk',
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Allow 1 request per 2s
    throttle: 1000,
  },
});

export const sendEmail = (templateParams: { name: string, email: string, message: string}) => {
  return emailjs.send('service_j9po874', 'template_7i710hb', templateParams)
}
