import { PropTypes, Component } from 'react'

const tahoeResorts = [
	"Bare Breezy Bars",
	"Olivia Orgy Oak",
	"Seeran Spicy Stage",
	"Big Philz Plaza", 
	"Nav Deep Sleep Slopes", 
	"Dave BSD Dive",
	"Iman Hoe Island",
	"Sam Savage Slopes", 
	"Dirty Divya Valley",
	"Rowdy Ryan Range",
	"Sugar Bowl"
]

class Autocomplete extends Component {
	get value() {
		return this.refs.inputResort.value
	}
	
	set value(inputVaue) {
		this.refs.inputResort.value = inputValue
	}
	
	render() {
		return (
				<div>
					<input ref="inputResort" 
							type="text" 
							list="tahoe-resorts" />
							<datalist id="tahoe-resorts">
								{this.props.options.map(
								(opt,i) => 
								<option key={i}>{opt}</option>		
								)}
							</datalist>
				</div>
				)
	}
}
export const AddDayForm = ({ 
							resort, 
							date, 
							powder, 
							backcountry,
							onNewDay})=> {
	
	let _resort, _date, _powder, _backcountry
	
	const submit = (e) => {
		e.preventDefault()
		
		onNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.value,
			backcountry: _backcountry.value
		})
		
		_resort.value=''
		_date.value=''
		_powder.checked=false
		_backcountry.value=false
	}
	
	
	return (
		<form onSubmit={submit} className="add-day-form">
		

			<label htmlFor="resort">Resort Name</label>
			<Autocomplete options={tahoeResorts}
					ref={input => _resort = input}/>
			
			<label htmlFor="date">Date</label>
			<input id="date" 
					type="date" 
					required 
					defaultValue={date}
					ref={input => _date = input}/>
			
				<div>
					<label htmlFor="powder">Powder Day</label>
					<input id="powder" 
							type="checkbox" 
							required 
							defaultChecked={powder}
							ref={input => _powder = input}/>
				</div>
				
				<div>
					<label htmlFor="backcountry">Backcountry</label>
					<input id="backcountry" 
							type="checkbox" 
								required 
								defaultChecked={backcountry}
								ref={input => _backcountry = input}/>
				</div>
					
					<button> ADD DAY</button>
		</form>
	)
	
}


AddDayForm.defaultProps = {
		resort: "Kirkwood", 
		date: "2017-02-12", 
		powder: true, 
		backcountry: false
	
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}