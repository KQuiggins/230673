const submitEmail = async (email) => {
    try {
      const res = await fetch(
        'https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – ${await res.text()}`);
      }

      const data = await res.json();
      console.log('Success:', data);
      return data;
    } catch (err) {
      console.error('Error submitting email:', err);
      throw err;
    }
  };

  // usage
  submitEmail('your-email@example.com');
