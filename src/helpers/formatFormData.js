function formatFormData(formData) {
  const labels = {
    description: "Питання: ",
    phoneNumber: "Номер телефону: ",
    category: "Категорія: ",
  };

  let formattedData = "";

  for (const key in formData) {
    if (formData[key]) {
      formattedData += `${labels[key]}${formData[key]}\n`;
    }
  }

  return formattedData;
}

export default formatFormData;
