import { updateMaterialUrl } from "../../../constants";

const updateMaterial = (admin, data) => {
  const req = { admin: admin, data: data };
  return fetch(updateMaterialUrl, {
    method: "POST",
    body: JSON.stringify(req),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + req.admin.token
    }
  }).then(res => {
    if (res.status >= 400) {
      alert("Token not found");
    }
  })
};

export default updateMaterial;
