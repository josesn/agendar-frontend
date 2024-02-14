import DataTable from 'react-data-table-component';
import { Container, Spinner} from './styles';

const CustomLoader = () => (
	<div style={{ padding: '14px' }}>
		<Spinner />
	</div>
);

export default function ScheduleList({ data, loading, user }){
	const columns = [

		{
			name: 'Nome',
			selector: row => row.user.name,
		},
		{
			name: 'Serviço',
			selector: row => row.activity.name,
		},
		{
			name: 'Veículo',
			selector: row => row.vehicle.model,
		},
		{
			name: 'Data',
			selector: row => row.toDate,
		},
	];

    return(
        <Container>
            <DataTable
                columns={columns}
                data={
					data ? data.filter((schedule) => schedule.userId === user.id) : []
				}
                progressPending={loading}
                progressComponent={<CustomLoader />}
				pagination
		    />
        </Container>
    );
}