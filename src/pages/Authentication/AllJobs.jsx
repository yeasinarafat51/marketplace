import { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../../components/JobCard';

const AllJobs = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [jobs, setJobs] = useState([]);

  // Fetch jobs based on filters and pagination
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://market-server-ruby.vercel.app/all-jobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`
      );
      setJobs(data);
    };
    getData();
  }, [currentPage, filter, itemsPerPage, search, sort]);

  // Fetch total job count for pagination
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(
        `https://market-server-ruby.vercel.app/jobs-count?filter=${filter}&search=${search}`
      );
      setCount(data.count);
    };
    getCount();
  }, [filter, search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // Handle pagination
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  // Handle reset
  const handleReset = () => {
    setFilter('');
    setSort('');
    setSearch('');
    setSearchText('');
    setCurrentPage(1);  // Reset to the first page
  };

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText.trim()); // Trim unnecessary spaces
    setCurrentPage(1); // Reset to the first page on new search
  };

  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        {/* Filters and Search Section */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1); // Reset page when changing filter
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none'
                type='text'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />
              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600'>
                Search
              </button>
            </div>
          </form>

          {/* Sort By Deadline */}
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1); // Reset page when changing sort
              }}
              value={sort}
              name='sort'
              id='sort'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className='btn'>
            Reset
          </button>
        </div>

        {/* Jobs Listing */}
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 bg-gray-200 rounded-md'
        >
          Previous
        </button>

        {/* Pagination Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} px-4 py-2 mx-1 transition-colors rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded-md'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
