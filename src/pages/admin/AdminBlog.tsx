
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const blogPosts = [
  {
    id: 1,
    title: "10 Tren Teknologi yang Perlu Diperhatikan di 2025",
    author: "Administrator",
    date: "2025-04-05",
    status: "Published"
  },
  {
    id: 2,
    title: "Pentingnya Keamanan Cyber Untuk Bisnis Kecil",
    author: "Budi Santoso",
    date: "2025-04-02",
    status: "Published"
  },
  {
    id: 3,
    title: "Bagaimana AI Merevolusi Dunia Bisnis",
    author: "Siti Aminah",
    date: "2025-03-28",
    status: "Draft"
  },
  {
    id: 4,
    title: "Panduan SEO untuk Pemula",
    author: "Administrator",
    date: "2025-03-22",
    status: "Published"
  }
];

const AdminBlog = () => {
  const handleAddPost = () => {
    toast({
      title: "Tambah Artikel Blog",
      description: "Fitur ini akan tersedia setelah backend diimplementasikan.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manajemen Blog</h1>
        <Button onClick={handleAddPost}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Artikel
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Judul
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Penulis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.id}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => toast({
                      title: "Edit Artikel",
                      description: `Edit artikel: ${post.title}`,
                    })}
                  >
                    Edit
                  </button>
                  <button
                    className="text-green-600 hover:text-green-900 ml-4"
                    onClick={() => toast({
                      title: "Lihat Artikel",
                      description: `Lihat artikel: ${post.title}`,
                    })}
                  >
                    Lihat
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={() => toast({
                      title: "Hapus Artikel",
                      description: `Hapus artikel: ${post.title}`,
                      variant: "destructive",
                    })}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlog;
