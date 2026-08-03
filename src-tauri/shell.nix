{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    pkg-config
    glib
    gtk3
    webkitgtk_4_1
    libsoup_3
    openssl
    cairo
    pango
    gdk-pixbuf
    at-spi2-atk
  ];
}
