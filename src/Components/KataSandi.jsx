import "../Components/cssComponents/inputbar.css";

function KataSandi(){
    return(
    <div className="inputbar">
        <label>Kata Sandi</label>
        <input type="password" id="katasandi" name="katasandi" placeholder="Masukkan Kata Sandi"/>
    </div>
    );
}

export default KataSandi;
