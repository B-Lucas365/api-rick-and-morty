import { Container } from "./style"

interface FilterProps {
    setFilterStatus: (status: string) => void,
    setFilterSpecie: (specie: string) => void,
    setFilterGender: (gender: string) => void,
}

export const Filter = ({setFilterStatus, setFilterSpecie, setFilterGender}: FilterProps) => {

    const listStatus = ["Alive", "Dead", "Unknown"];
    const listSpecies = ["Alien", "Animal", "Cronenberg", "Disease", "Human", "Humanoid", "Mythological", "Poopybutthole", "Robot", "Unknown"];
    const listGender = ["Female", "Male", "Genderless", "Unknown"];

    return(
        <Container>
            <h3>FILTERS</h3>

            <div className="inputs-filters">
            
                <div className="block-filter">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="">Select</option>
                        {listStatus.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="block-filter">
                    <label htmlFor="specie">Specie</label>
                    <select name="specie" id="specie" onChange={(e) => setFilterSpecie(e.target.value)}>
                        <option value="">Select</option>
                        {listSpecies.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="block-filter">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={(e) => setFilterGender(e.target.value)}>
                        <option value="">Select</option>
                        {listGender.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
                
            </div>
        </Container>
    )
}