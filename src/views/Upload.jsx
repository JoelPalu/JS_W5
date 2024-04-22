const Upload = () => {

  const handleSubmit =(event) =>  {
    event.preventDefault();
    console.log('Upload');
  }

  const setName = (name) => {
    console.log(name);
  }
  return<>
  <form onSubmit={handleSubmit}>
    <input type="file" name='file' onChange={(event) => setName(event.target.value)}/>
    <label htmlFor='name'>Name</label>
    <input type="text" name='name' onChange={(event) => setName(event.target.value)}/>

    <button type="submit">Upload</button>
  </form>
    <button className="text-4xl rounded-lg bg-blue-500 p-3">Go home</button>
  </>
}

export default Upload;
