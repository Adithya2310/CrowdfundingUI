
const CustomButton = ({handleClick,name,styles}) => {
  return (
    <button className={styles} onClick={handleClick}>
    {name}
    </button>
  )
}

export default CustomButton