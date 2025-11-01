// app/riwayat/page.jsx
'use client';

import React from 'react';

const RiwayatPage = () => {
  // Data pesanan
  const orders = [
    {
      id: 1,
      location: "Kelapa Dua Depok",
      date: "3/10/2025",
      customer: "Gazika",
      items: [
        {
          name: "Matcha Latte",
          variant: "Katana",
          price: 25000
        }
      ],
      totalItems: 1,
      totalPrice: 25000
    },
    {
      id: 2,
      location: "Kelapa Dua Depok",
      date: "3/10/2025",
      customer: "Gazika",
      items: [
        {
          name: "Matcha Latte",
          variant: "Katana",
          price: 25000
        }
      ],
      totalItems: 1,
      totalPrice: 25000
    }
  ];

  // Styles dengan font Montserrat
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Montserrat, sans-serif'
    },
    header: {
      marginBottom: '20px'
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '16px',
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif'
    },
    filterSection: {
      background: 'white',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Montserrat, sans-serif'
    },
    subtitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#666',
      marginBottom: '8px',
      fontFamily: 'Montserrat, sans-serif'
    },
    filter: {
      display: 'flex',
      gap: '12px',
      fontFamily: 'Montserrat, sans-serif'
    },
    filterActive: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif'
    },
    ordersList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderHeader: {
      marginBottom: '12px',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderLocation: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '4px',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderDate: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '2px',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderCustomer: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif'
    },
    divider: {
      height: '1px',
      backgroundColor: '#e0e0e0',
      margin: '12px 0',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderDivider: {
      height: '2px',
      backgroundColor: '#f0f0f0',
      margin: '16px -16px',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderItems: {
      marginBottom: '12px',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderItem: {
      marginBottom: '8px',
      fontFamily: 'Montserrat, sans-serif'
    },
    itemName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '2px',
      fontFamily: 'Montserrat, sans-serif'
    },
    itemVariant: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      fontFamily: 'Montserrat, sans-serif'
    },
    totalText: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif'
    },
    totalPrice: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#333',
      fontFamily: 'Montserrat, sans-serif'
    },
    orderActions: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'space-between',
      fontFamily: 'Montserrat, sans-serif'
    },
    otherButton: {
      flex: 1,
      padding: '12px 16px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: '#f8f9fa',
      color: '#333',
      border: '1px solid #e0e0e0',
      fontFamily: 'Montserrat, sans-serif'
    },
    reorderButton: {
      flex: 1,
      padding: '12px 16px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      backgroundColor: '#007bff',
      color: 'white',
      fontFamily: 'Montserrat, sans-serif'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Daftar Pesanan</h1>
        
        {/* Filter Section */}
        <div style={styles.filterSection}>
          <h2 style={styles.subtitle}>Pesanan saat ini</h2>
          <div style={styles.filter}>
            <span style={styles.filterActive}>Semua Pesanan</span>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div style={styles.ordersList}>
        {orders.map((order, index) => (
          <div key={order.id} style={styles.orderCard}>
            {/* Order Header */}
            <div style={styles.orderHeader}>
              <div style={styles.orderLocation}>{order.location}</div>
              <div style={styles.orderDate}>{order.date}</div>
              <div style={styles.orderCustomer}>{order.customer}</div>
            </div>

            <div style={styles.divider}></div>

            {/* Order Items */}
            <div style={styles.orderItems}>
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} style={styles.orderItem}>
                  <div style={styles.itemName}>{item.name}</div>
                  <div style={styles.itemVariant}>{item.variant}</div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div style={styles.orderTotal}>
              <div style={styles.totalText}>
                Total {order.totalItems} items
              </div>
              <div style={styles.totalPrice}>Rp: {order.totalPrice.toLocaleString('id-ID')}</div>
            </div>

            <div style={styles.divider}></div>

            {/* Order Actions */}
            <div style={styles.orderActions}>
              <button 
                style={styles.otherButton}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e9ecef'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
              >
                Lainya
              </button>
              <button 
                style={styles.reorderButton}
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Pesan Lagi
              </button>
            </div>

            {/* Add divider between orders except for last one */}
            {index < orders.length - 1 && (
              <div style={styles.orderDivider}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiwayatPage;