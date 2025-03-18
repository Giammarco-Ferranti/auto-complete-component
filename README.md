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

