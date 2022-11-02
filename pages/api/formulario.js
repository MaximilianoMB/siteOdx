// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { nome, empresa, email, assunto, mensagem} = req.body;
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass:process.env.pass
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'seuemail@gmail.com',
      subject: `Contato recebido de ${nome}`,
      html: `<p>Novo contato recebido pelo forms do site</p><br>
      <p><strong>Nome: </strong> ${nome} </p><br>
      <p><strong>Empresa: </strong> ${empresa} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Assunto: </strong> ${assunto} </p><br>
      <p><strong>Mensagem: </strong> ${mensagem} </p><br>`,
    });

    console.log('enviou', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
