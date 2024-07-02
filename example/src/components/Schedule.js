import React, { useState } from 'react';
import Header from './Header'; // Adjust the import path as necessary
import Leftsidebar from './Leftsidebar'; // Adjust the import path as necessary
import { useTable, usePagination } from 'react-table';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Menu,
  MenuItem as MenuOption
} from '@mui/material';
import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  ModeEditOutline as ModeEditOutlineIcon,
  Visibility as VisibilityIcon,
  DeleteOutline as DeleteOutlineIcon,
  LocalPrintshop as LocalPrintshopIcon,
  MailOutline as MailOutlineIcon,
  FileUpload as FileUploadIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

export default function Schedule() {
  // Modal state
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [newProject, setNewProject] = useState({
    projectNumber: '',
    projectName: '',
    managingCompany: 'OSB',
    ownerRepresentative: '',
    dueDate: '',
    task: '',
    status: 'Pending',
    category: '',
    description: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = () => {
    console.log(newProject);
    // Add new project logic here
    handleClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log("Edit action");
    handleMenuClose();
  };

  const handleView = () => {
    console.log("View action");
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete action");
    handleMenuClose();
  };

  const handlePrint = () => {
    console.log("Print action");
    handleMenuClose();
  };

  const handleEmail = () => {
    console.log("Email action");
    handleMenuClose();
  };

  const handleImportTimeSchedule = () => {
    console.log("Import Time Schedule action");
    handleMenuClose();
  };

  const handleExportTimeSchedule = () => {
    console.log("Export Time Schedule action");
    handleMenuClose();
  };

  // Define sample data
  const data = React.useMemo(
    () => [
      {
        projectNumber: '123',
        projectName: 'Sample Project 1',
        managingCompany: 'Ali murshad',
        ownerRepresentative: 'John Doe',
        dueDate: '2024-06-30',
        task: 'Task description 1',
        status: <span className="s__0iuhh">In Progress</span>,
        action: (
          <div>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuOption onClick={handleEdit}>
                <ModeEditOutlineIcon /> Edit
              </MenuOption>
              <MenuOption onClick={handleView}>
                <VisibilityIcon /> View
              </MenuOption>
              <MenuOption onClick={handleDelete}>
                <DeleteOutlineIcon /> Delete
              </MenuOption>
              <MenuOption onClick={handlePrint}>
                <LocalPrintshopIcon /> Print
              </MenuOption>
              <MenuOption onClick={handleEmail}>
                <MailOutlineIcon /> Email
              </MenuOption>
              <MenuOption onClick={handleImportTimeSchedule}>
                <DownloadIcon /> Import Time Schedule
              </MenuOption>
              <MenuOption onClick={handleExportTimeSchedule}>
                <FileUploadIcon /> Export Time Schedule
              </MenuOption>
            </Menu>
          </div>
        ),
      },
      {
        projectNumber: '124',
        projectName: 'Sample Project 2',
        managingCompany: 'Ali murshad',
        ownerRepresentative: 'Jane Doe',
        dueDate: '2024-07-15',
        task: 'Task description 2',
        status: <span className="s__0iuhh">Completed</span>,
        action: (
          <div>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuOption onClick={handleEdit}>
                <ModeEditOutlineIcon /> Edit
              </MenuOption>
              <MenuOption onClick={handleView}>
                <VisibilityIcon /> View
              </MenuOption>
              <MenuOption onClick={handleDelete}>
                <DeleteOutlineIcon /> Delete
              </MenuOption>
              <MenuOption onClick={handlePrint}>
                <LocalPrintshopIcon /> Print
              </MenuOption>
              <MenuOption onClick={handleEmail}>
                <MailOutlineIcon /> Email
              </MenuOption>
              <MenuOption onClick={handleImportTimeSchedule}>
                <DownloadIcon /> Import Time Schedule
              </MenuOption>
              <MenuOption onClick={handleExportTimeSchedule}>
                <FileUploadIcon /> Export Time Schedule
              </MenuOption>
            </Menu>
          </div>
        ),
      },
      {
        projectNumber: '125',
        projectName: 'Sample Project 3',
        managingCompany: 'Ali murshad',
        ownerRepresentative: 'Alice Smith',
        dueDate: '2024-07-20',
        task: 'Task description 3',
        status: <span className="s__0iuhh">Pending</span>,
        action: (
          <div>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuOption onClick={handleEdit}>
                <ModeEditOutlineIcon /> Edit
              </MenuOption>
              <MenuOption onClick={handleView}>
                <VisibilityIcon /> View
              </MenuOption>
              <MenuOption onClick={handleDelete}>
                <DeleteOutlineIcon /> Delete
              </MenuOption>
              <MenuOption onClick={handlePrint}>
                <LocalPrintshopIcon /> Print
              </MenuOption>
              <MenuOption onClick={handleEmail}>
                <MailOutlineIcon /> Email
              </MenuOption>
              <MenuOption onClick={handleImportTimeSchedule}>
                <DownloadIcon /> Import Time Schedule
              </MenuOption>
              <MenuOption onClick={handleExportTimeSchedule}>
                <FileUploadIcon /> Export Time Schedule
              </MenuOption>
            </Menu>
          </div>
        ),
      },
      {
        projectNumber: '126',
        projectName: 'Sample Project 4',
        managingCompany: 'Ali murshad',
        ownerRepresentative: 'Bob Johnson',
        dueDate: '2024-08-05',
        task: 'Task description 4',
        status: <span className="s__0iuhh">Active</span>,
        action: (
          <div>
            <IconButton onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuOption onClick={handleEdit}>
                <ModeEditOutlineIcon /> Edit
              </MenuOption>
              <MenuOption onClick={handleView}>
                <VisibilityIcon /> View
              </MenuOption>
              <MenuOption onClick={handleDelete}>
                <DeleteOutlineIcon /> Delete
              </MenuOption>
              <MenuOption onClick={handlePrint}>
                <LocalPrintshopIcon /> Print
              </MenuOption>
              <MenuOption onClick={handleEmail}>
                <MailOutlineIcon /> Email
              </MenuOption>
              <MenuOption onClick={handleImportTimeSchedule}>
                <DownloadIcon /> Import Time Schedule
              </MenuOption>
              <MenuOption onClick={handleExportTimeSchedule}>
                <FileUploadIcon /> Export Time Schedule
              </MenuOption>
            </Menu>
          </div>
        ),
      },
    ],
    [anchorEl]
  );

  // Define columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'Project #',
        accessor: 'projectNumber',
      },
      {
        Header: 'Project Name',
        accessor: 'projectName',
      },
      {
        Header: 'Managing Company (OSB)',
        accessor: 'managingCompany',
      },
      {
        Header: 'Owner Representative (OSB)',
        accessor: 'ownerRepresentative',
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Task',
        accessor: 'task',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
    ],
    []
  );

  // Use the useTable and usePagination hooks to create the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
    },
    usePagination
  );

  return (
    <>
      <Header />
      <div className="mainpage">
        <div className="row">
          <div className="col-md-1">
            <Leftsidebar />
          </div>
          <div className="col-md-11">
            <div className="final__bg__09">
              <div className="seaech__box___00">
                <div className="row">
                  <div className="col-md-4">
                    <div className="s_09ssd">
                      <h3>Schedule</h3>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Search bar */}
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                  <div className="col-md-2 text-right">
                    {/* Create New Project button */}
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                      <span className="spp">
                        <AddIcon />
                      </span>{' '}
                      Create New Project
                    </Button>
                  </div>
                </div>
              </div>

              <table {...getTableProps()} className="table">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Pagination Controls */}
              {/* <div className="pagination">
                <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                  Previous
                </Button>
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating a new project */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: 700 }}>
          <Typography variant="h6" component="h2">
            <h1 className="s__09iii">Create OBS Structure</h1>
          </Typography>

          <div className="s__set__09w">
            <Select
              className="bg__09870111"
              label="Category"
              name="category"
              value={newProject.category}
              onChange={handleChange}
              fullWidth
              margin="normal"
              displayEmpty
            >
              <MenuItem value="">Current OBS Projects</MenuItem>
              <MenuItem value="currentObsProjects">Universal Construction</MenuItem>
              <MenuItem value="currentObsProjects2">Current OBS Projects2</MenuItem>
            </Select>

            <h3 className="createnewobs">Create New OBS</h3>
            <TextField
              label="Project Number"
              name="projectNumber"
              value={newProject.projectNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={newProject.description} // Make sure this matches your state
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={2} // Adjust the number of rows as needed
            />

            <div className="button__00999">
              <Button className="wclose" onClick={handleClose} variant="contained" color="secondary">
                Close
              </Button>
              <Button onClick={handleCreate} variant="contained" color="primary">
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
