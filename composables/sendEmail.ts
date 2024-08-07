import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'QqO8LzD_qqjDyhPTr',
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Allow 1 request per 2s
    throttle: 1000,
  },
});

export const sendEmail = (templateParams: { name: string, email: string, message: string}) => {
  return emailjs.send('service_ugc.withceline', 'template_7on2ogc', templateParams)
}
