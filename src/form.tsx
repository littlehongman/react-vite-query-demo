import { useEffect, useState } from 'react';
import { fetchData } from './query';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { queryClient } from './App';
import moment from 'moment';

const DemoForm = () => {
  const [id, setId]: any = useState(0);

  const mutation = useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      // Invalidate and refetch
      // console.log("Here")
      // queryClient.invalidateQueries({ queryKey: ['album', id] })
    },
  })

  const handleSubmit = () => {
    mutation.mutate(id);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      
    }
   
  }, [mutation.data])

  useEffect(() => {
    console.log(moment("2011-51", "YYYY-WW").toISOString()); 
  }, [])

    return (
        <>
          <Form.Select aria-label="Default select example" 
                  value={id} 
                  onChange={(e: any) => setId(e.target.value)}>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <br/>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <p>{mutation.data?.title}</p>
        </>
    )

}


export default DemoForm;