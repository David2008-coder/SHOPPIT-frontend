import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
};

export const Spinner = ({loading}) => {
  return (
    <ClipLoader 
      Loading={loading}
      cssOverride={override}
      size={450}
      aria-label="loading Spinner"
      data-testid="loader"
    />
  )
}

