import './UserCard.css'

function UserCard({ user }) {
  const imagem = user.sex === "male"
    ? "/iconm.png"
    : user.sex === "female"
    ? "/iconf.png"
    : user.sex === "outro"
    ? "/icono.png"
    : "";

  return (
    <div className='user-card'>
      {imagem && <img src={imagem} alt="imagem" />}
      <div className='user-card-info'>
        <p>Nome: {user.name}</p>
        <p>E-mail: {user.email}</p>
        <p>Idade: {user.age}</p>
        <p>Sexo: {user.sex}</p>
      </div>
    </div>
  )
}

export default UserCard
