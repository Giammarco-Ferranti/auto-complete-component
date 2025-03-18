# Auto Complete Component

This is an autocomplete search bar built with React and TypeScript. It retrieves words from a mock data array within the repository, but it also supports fetching data from the Datamuse API.

## Tools and Libraries Used

- Vite
- React
- TypeScript
- Datamuse API

## Features

- **Loading state**: Displays a loading indicator while fetching results.
- **No data message**: Shows a message when no results are found.
- **Error handling**: Displays an error message in case of API failure.
- **Click outside to close**: Clicking outside the results modal closes the suggestions box.
- **Highlighted matches**: Highlights the matching portion of the input text in the results.

## Installation and Setup


### Clone the repository

```bash
  git clone https://github.com/Giammarco-Ferranti/auto-complete-component.git
```

### Install the dependencies
```bash
npm install
```


### Run the project 
```bash
npm run dev
```


## Assumptions and Design Decisions

### Assumptions
- The user types at least one character before suggestions appear.
- The mock data simulates API behavior for local testing without internet dependency.
- The component is designed for a React app using state management via `useState`. No external state management.
- The Datamuse API returns valid results in a predictable format.

### Design Decisions
- **Vite for Development**: Chosen for its faster build times over Create React App.
- **Mock Data + API Option**: Allows local testing without relying on Datamuse API.
- **Auto-close on Click Outside**: Improves UX by closing the suggestion box when clicking elsewhere.
- **Filtering with `startsWith`**: Ensures relevant and fast suggestions.
- **300ms Mock Data Delay**: Simulates real API latency for a more realistic experience.
- **API Error Handling**: Displays an error message and closes the suggestions box if the API fails.
- **300ms Delay on FetchData**: Introduced to minimize API calls and enhance performance by handling rapid user input efficiently.


## Usage/Configuration

To use the Datamuse API, modify SearchBar.tsx by commenting out the mock data section and uncommenting the API request:
```typescript
  const fetchData = async () => {
    try {
      setSearchListModal(true);
      const formatQuery = query.toLowerCase();

      //Mock Data
      const data = await new Promise<Word[]>((resolve) => {
        setTimeout(() => {
          const result: Word[] = mockData
            .filter((item) => item.word.startsWith(formatQuery))
            .map((item: Omit<Word, "id">, index: number) => ({
              id: index + 1,
              word: item.word,
            }));
          resolve(result);
        }, 300);
      });
      setWordsList(data);

      // Real API using datamuse free endpoint
      // const results = await fetch(
      //   `https://api.datamuse.com/words?sp=${formatQuery}*`
      // );
      // if (results.status === 200) {
      //   const data = await results.json();
      //   const mapping: Word[] = data.map(
      //     (item: Omit<Word, "id">, index: number) => ({
      //       id: index + 1,
      //       word: item.word,
      //     })
      //   );
      //   setWordsList(mapping);
      // }
    } catch (error) {
      console.log(error);
      setSearchListModal(false);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
```

