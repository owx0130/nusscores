import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="row">
        <span className="text-center fs-3 fw-bold py-3">Welcome to nusscores.com!</span>
        <div className="col"></div>
        <img className="col w-50" src="https://drive.google.com/uc?export=view&id=1GAG76hvNbq5f9aDFsQ6lR-jSdZdOO4G4" />
        <div className="col"></div>
      </div>
    </>
  )
}