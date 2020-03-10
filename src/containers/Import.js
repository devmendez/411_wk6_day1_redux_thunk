// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, deleteMake } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: index => dispatch(deleteMake(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)
