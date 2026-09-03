import RecomendedLis from "./RecomendedList"

function Register( { isRecomendedList }) {
    return (
        <>
            {isRecomendedList && <RecomendedLis/>}
        </>
      );
}

export default Register;