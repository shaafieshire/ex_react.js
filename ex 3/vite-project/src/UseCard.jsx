/// 

const UseCard = ({ email, name , role} ) => {
  return (
    <div className="use-card">
     <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UseCard;