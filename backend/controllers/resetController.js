import { exec } from 'child_process';

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};

const destroyData = async (req, res) => {
  try {
    const result = await runCommand('npm run data:destroy');
    res.status(200).json({ message: 'Data destroyed successfully', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const importData = async (req, res) => {
  try {
    const result = await runCommand('npm run data:import');
    res.status(200).json({ message: 'Data imported successfully', result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { destroyData, importData };
