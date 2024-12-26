import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const invoices = [
    {
      invoice: "1.",
      paymentStatus: "Seascape Surveys Indonesia",
      totalAmount: "Bow Thruster (P75) 2 pcs",
      paymentMethod: "Rp15.000.000",
    },
    {
      invoice: "2.",
      paymentStatus: "PT. Pertamina EP",
      totalAmount: "-",
      paymentMethod: "Rp15.000.000",
    },
    {
      invoice: "3.",
      paymentStatus: "LEN",
      totalAmount: "LIDAR, GPS, Camera",
      paymentMethod: "Rp0",
    },
    {
      invoice: "4.",
      paymentStatus: "Intel",
      totalAmount: "Intel NUC 14 Pro 8/256 Memory",
      paymentMethod: "Rp11.222.000",
    },
    {
      invoice: "5.",
      paymentStatus: "Telkomsel",
      totalAmount: "-",
      paymentMethod: "Rp10.000.000",
    },
    {
      invoice: "6.",
      paymentStatus: "PT. PLN",
      totalAmount: "-",
      paymentMethod: "Rp12.500.000",
    },
    {
      invoice: "7.",
      paymentStatus: "Samudera Indonesia",
      totalAmount: "-",
      paymentMethod: "Rp10.000.000",
    },
    {
      invoice: "8.",
      paymentStatus: "PT. Semen Indonesia",
      totalAmount: "-",
      paymentMethod: "Rp10.000.000",
    },
    {
      invoice: "9.",
      paymentStatus: "Institut Teknologi Sepuluh Nopember",
      totalAmount: "-",
      paymentMethod: "Rp50.000.000",
    },
  ];
  
  export function Tablee() {
    return (
      <div className="overflow-x-auto w-full max-w-4xl mx-auto border border-gray-700 rounded-lg bg-dark-blue mt-8 mb-8">
        <Table className="w-full text-left">
          <TableHeader>
            <TableRow className="bg-[#e95e27] text-white">
              <TableHead className="py-4 px-6 font-semibold w-[70px]">
                No.
              </TableHead>
              <TableHead className="py-4 px-6 font-semibold text-center w-[420px]">Company</TableHead>
              <TableHead className="py-4 px-6 font-semibold text-center">Fund</TableHead>
              <TableHead className="py-4 px-6 font-semibold text-center">
                Item
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.invoice}
                className="even:bg-[#0B1C3A] hover:bg-[#122243] transition duration-150"
              >
                <TableCell className="py-4 px-6 font-medium text-white">
                  {invoice.invoice}
                </TableCell>
                <TableCell className="py-4 px-6 text-white text-center">{invoice.paymentStatus}</TableCell>
                <TableCell className="py-4 px-6 text-white text-center">{invoice.paymentMethod}</TableCell>
                <TableCell className="py-4 px-6 text-center text-white">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-[#051227] text-white">
              <TableCell className="py-4 px-6 font-semibold" colSpan={3}>
                Total
              </TableCell>
              <TableCell className="py-4 px-6 text-center font-semibold">
                Rp133.722.000
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
  