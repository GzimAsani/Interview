class Data {
  async getUser() {
    const profileResponse = await fetch(
      `http://ws-old.parlament.ch/councillors?format=json`
    );

    const profile = await profileResponse.json();

    return profile
  
  }
}

export default Data;
