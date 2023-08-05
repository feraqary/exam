import {
    setLoading,
    setError,
    setSubCompanies,
    useCreateSubCompanyMutation,
    useGetSubCompaniesQuery,
    useDeleteSubCompanyMutation,
    useGetSubCompanyQuery,
  } from './api';
  
  export const createSubCompany = async (data) => {
    const mutation = useCreateSubCompanyMutation();
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error creating subcompany:', error);
      throw error;
    }
  };
  
  export const getSubCompanies = async ({ parentCompanyId, companyType, page, pageSize }) => {
    const query = useGetSubCompaniesQuery({ parentCompanyId, companyType, page, pageSize });
    try {
      const result = await query.refetch();
      return result.data;
    } catch (error) {
      console.error('Error fetching subcompanies:', error);
      throw error;
    }
  };
  
  export const deleteSubCompany = async (subCompanyId) => {
    const mutation = useDeleteSubCompanyMutation();
    try {
      await mutation.mutateAsync(subCompanyId);
    } catch (error) {
      console.error('Error deleting subcompany:', error);
      throw error;
    }
  };
  
  export const getSubCompany = async ({ subCompanyId, companyType }) => {
    const query = useGetSubCompanyQuery({ subCompanyId, companyType });
    try {
      const result = await query.refetch();
      return result.data;
    } catch (error) {
      console.error('Error fetching subcompany:', error);
      throw error;
    }
  };
  