export const GetFormularios = async function () {
  const url = "http://localhost:3000/formularios";
  let requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, requestOptions)
    .then((response) => {
      const result = response.json().then((data) => {
        console.log(data);
        return data;
      });
      return result;
    })
    .catch((error) => {
      return {
        ok: false,
        result: {
          meesage: "Error en la consulta: " + error,
        },
      };
    });

  return result;
};
