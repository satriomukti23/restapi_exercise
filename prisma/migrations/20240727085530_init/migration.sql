-- CreateTable
CREATE TABLE "Anggota" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_telepon" TEXT NOT NULL,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "penerbit" TEXT NOT NULL,
    "tahun_terbit" INTEGER NOT NULL,
    "no_rak" TEXT NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peminjaman" (
    "id" TEXT NOT NULL,
    "anggotaId" TEXT NOT NULL,
    "bukuId" TEXT NOT NULL,
    "tanggal_pinjam" TIMESTAMP(3) NOT NULL,
    "tanggal_kembali" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Denda" (
    "id" TEXT NOT NULL,
    "peminjamanId" TEXT NOT NULL,
    "jumlah_denda" INTEGER NOT NULL,

    CONSTRAINT "Denda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Peminjaman_anggotaId_key" ON "Peminjaman"("anggotaId");

-- CreateIndex
CREATE UNIQUE INDEX "Peminjaman_bukuId_key" ON "Peminjaman"("bukuId");

-- CreateIndex
CREATE UNIQUE INDEX "Denda_peminjamanId_key" ON "Denda"("peminjamanId");

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_anggotaId_fkey" FOREIGN KEY ("anggotaId") REFERENCES "Anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_bukuId_fkey" FOREIGN KEY ("bukuId") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Denda" ADD CONSTRAINT "Denda_peminjamanId_fkey" FOREIGN KEY ("peminjamanId") REFERENCES "Peminjaman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
