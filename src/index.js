import ApiClient from './ApiClient';
import AccountingRuleData from './model/AccountingRuleData';
import AccountingTagRuleData from './model/AccountingTagRuleData';
import AppUser from './model/AppUser';
import AppUserClientMapping from './model/AppUserClientMapping';
import AppUserData from './model/AppUserData';
import BatchResponse from './model/BatchResponse';
import BodyPart from './model/BodyPart';
import BodyPartMediaType from './model/BodyPartMediaType';
import CashierData from './model/CashierData';
import CashierTransactionData from './model/CashierTransactionData';
import CashierTxnType from './model/CashierTxnType';
import Charge from './model/Charge';
import ChargeData from './model/ChargeData';
import ChargeFeeOnMonthDay from './model/ChargeFeeOnMonthDay';
import Client from './model/Client';
import ClientData from './model/ClientData';
import CodeValueData from './model/CodeValueData';
import CommandProcessingResult from './model/CommandProcessingResult';
import CommandWrapper from './model/CommandWrapper';
import Component from './model/Component';
import ComponentData from './model/ComponentData';
import ContentDisposition from './model/ContentDisposition';
import CurrencyData from './model/CurrencyData';
import DeleteAccountNumberFormatsResponse from './model/DeleteAccountNumberFormatsResponse';
import DeleteAccountingRulesResponse from './model/DeleteAccountingRulesResponse';
import DeleteCentersCenterIdResponse from './model/DeleteCentersCenterIdResponse';
import DeleteChargesChargeIdResponse from './model/DeleteChargesChargeIdResponse';
import DeleteClientsClientIdChargesChargeIdResponse from './model/DeleteClientsClientIdChargesChargeIdResponse';
import DeleteClientsClientIdIdentifiersIdentifierIdResponse from './model/DeleteClientsClientIdIdentifiersIdentifierIdResponse';
import DeleteClientsClientIdResponse from './model/DeleteClientsClientIdResponse';
import DeleteCodeValueDataResponse from './model/DeleteCodeValueDataResponse';
import DeleteCodesResponse from './model/DeleteCodesResponse';
import DeleteDataTablesDatatableAppTableIdDatatableIdResponse from './model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse';
import DeleteDataTablesDatatableAppTableIdResponse from './model/DeleteDataTablesDatatableAppTableIdResponse';
import DeleteDataTablesResponse from './model/DeleteDataTablesResponse';
import DeleteEntityDatatableChecksTemplateResponse from './model/DeleteEntityDatatableChecksTemplateResponse';
import DeleteEntityTypeEntityIdDocumentsResponse from './model/DeleteEntityTypeEntityIdDocumentsResponse';
import DeleteFinancialActivityAccountsResponse from './model/DeleteFinancialActivityAccountsResponse';
import DeleteFixedDepositAccountsAccountIdResponse from './model/DeleteFixedDepositAccountsAccountIdResponse';
import DeleteFixedDepositProductsProductIdResponse from './model/DeleteFixedDepositProductsProductIdResponse';
import DeleteGLAccountsRequest from './model/DeleteGLAccountsRequest';
import DeleteGlClosuresResponse from './model/DeleteGlClosuresResponse';
import DeleteGroupsGroupIdResponse from './model/DeleteGroupsGroupIdResponse';
import DeleteHolidaysHolidayIdResponse from './model/DeleteHolidaysHolidayIdResponse';
import DeleteHookResponse from './model/DeleteHookResponse';
import DeleteInterestRateChartsChartIdChartSlabsResponse from './model/DeleteInterestRateChartsChartIdChartSlabsResponse';
import DeleteInterestRateChartsChartIdResponse from './model/DeleteInterestRateChartsChartIdResponse';
import DeleteLoansLoanIdChargesChargeIdResponse from './model/DeleteLoansLoanIdChargesChargeIdResponse';
import DeleteLoansLoanIdCollateralsCollateralIdResponse from './model/DeleteLoansLoanIdCollateralsCollateralIdResponse';
import DeleteLoansLoanIdResponse from './model/DeleteLoansLoanIdResponse';
import DeletePaymentTypesPaymentTypeIdResponse from './model/DeletePaymentTypesPaymentTypeIdResponse';
import DeleteProvisioningCriteriaResponse from './model/DeleteProvisioningCriteriaResponse';
import DeleteRecurringDepositAccountsResponse from './model/DeleteRecurringDepositAccountsResponse';
import DeleteRecurringDepositProductsProductIdResponse from './model/DeleteRecurringDepositProductsProductIdResponse';
import DeleteReportMailingJobsResponse from './model/DeleteReportMailingJobsResponse';
import DeleteReportsResponse from './model/DeleteReportsResponse';
import DeleteResourceTypeResourceIdNotesNoteIdResponse from './model/DeleteResourceTypeResourceIdNotesNoteIdResponse';
import DeleteRolesRoleIdResponse from './model/DeleteRolesRoleIdResponse';
import DeleteSavingsAccountsAccountIdResponse from './model/DeleteSavingsAccountsAccountIdResponse';
import DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from './model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import DeleteSavingsProductsProductIdResponse from './model/DeleteSavingsProductsProductIdResponse';
import DeleteSelfBeneficiariesTPTBeneficiaryIdResponse from './model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse';
import DeleteTellersTellerIdCashiersCashierIdResponse from './model/DeleteTellersTellerIdCashiersCashierIdResponse';
import DeleteTemplatesTemplateIdResponse from './model/DeleteTemplatesTemplateIdResponse';
import DeleteUsersUserIdResponse from './model/DeleteUsersUserIdResponse';
import Entity from './model/Entity';
import EnumOptionData from './model/EnumOptionData';
import Event from './model/Event';
import ExtensionData from './model/ExtensionData';
import ExternalServicesPropertiesData from './model/ExternalServicesPropertiesData';
import Field from './model/Field';
import FinancialActivityData from './model/FinancialActivityData';
import FloatingRate from './model/FloatingRate';
import FloatingRatePeriod from './model/FloatingRatePeriod';
import FormDataBodyPart from './model/FormDataBodyPart';
import FormDataContentDisposition from './model/FormDataContentDisposition';
import FundData from './model/FundData';
import GLAccount from './model/GLAccount';
import GLAccountData from './model/GLAccountData';
import GeoCodeData from './model/GeoCodeData';
import GetAccountNumberFormatsIdResponse from './model/GetAccountNumberFormatsIdResponse';
import GetAccountNumberFormatsResponseTemplate from './model/GetAccountNumberFormatsResponseTemplate';
import GetAccountOptions from './model/GetAccountOptions';
import GetAccountRulesResponse from './model/GetAccountRulesResponse';
import GetAccountRulesTemplateResponse from './model/GetAccountRulesTemplateResponse';
import GetAccountTransferTemplateResponse from './model/GetAccountTransferTemplateResponse';
import GetAccountTransfersFromAccountType from './model/GetAccountTransfersFromAccountType';
import GetAccountTransfersFromAccountTypeOptions from './model/GetAccountTransfersFromAccountTypeOptions';
import GetAccountTransfersFromClientOptions from './model/GetAccountTransfersFromClientOptions';
import GetAccountTransfersFromOffice from './model/GetAccountTransfersFromOffice';
import GetAccountTransfersFromOfficeOptions from './model/GetAccountTransfersFromOfficeOptions';
import GetAccountTransfersPageItems from './model/GetAccountTransfersPageItems';
import GetAccountTransfersPageItemsCurrency from './model/GetAccountTransfersPageItemsCurrency';
import GetAccountTransfersPageItemsFromAccount from './model/GetAccountTransfersPageItemsFromAccount';
import GetAccountTransfersPageItemsFromOffice from './model/GetAccountTransfersPageItemsFromOffice';
import GetAccountTransfersPageItemsToAccountType from './model/GetAccountTransfersPageItemsToAccountType';
import GetAccountTransfersResponse from './model/GetAccountTransfersResponse';
import GetAccountTransfersStatus from './model/GetAccountTransfersStatus';
import GetAccountTransfersTemplateRefundByTransferCurrency from './model/GetAccountTransfersTemplateRefundByTransferCurrency';
import GetAccountTransfersTemplateRefundByTransferFromAccount from './model/GetAccountTransfersTemplateRefundByTransferFromAccount';
import GetAccountTransfersTemplateRefundByTransferFromAccountOptions from './model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions';
import GetAccountTransfersTemplateRefundByTransferFromClient from './model/GetAccountTransfersTemplateRefundByTransferFromClient';
import GetAccountTransfersTemplateRefundByTransferFromClientOptions from './model/GetAccountTransfersTemplateRefundByTransferFromClientOptions';
import GetAccountTransfersTemplateRefundByTransferFromOffice from './model/GetAccountTransfersTemplateRefundByTransferFromOffice';
import GetAccountTransfersTemplateRefundByTransferFromOfficeOptions from './model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions';
import GetAccountTransfersTemplateRefundByTransferResponse from './model/GetAccountTransfersTemplateRefundByTransferResponse';
import GetAccountTransfersTemplateRefundByTransferToAccount from './model/GetAccountTransfersTemplateRefundByTransferToAccount';
import GetAccountTransfersTemplateRefundByTransferToClient from './model/GetAccountTransfersTemplateRefundByTransferToClient';
import GetAccountTransfersTemplateResponse from './model/GetAccountTransfersTemplateResponse';
import GetAccountTransfersTimeline from './model/GetAccountTransfersTimeline';
import GetAccountTransfersToAccountTypeOptions from './model/GetAccountTransfersToAccountTypeOptions';
import GetAccountTransfersToOfficeOptions from './model/GetAccountTransfersToOfficeOptions';
import GetAccountsChargeCalculationType from './model/GetAccountsChargeCalculationType';
import GetAccountsChargeTimeType from './model/GetAccountsChargeTimeType';
import GetAccountsCharges from './model/GetAccountsCharges';
import GetAccountsChargesCurrency from './model/GetAccountsChargesCurrency';
import GetAccountsCurrency from './model/GetAccountsCurrency';
import GetAccountsLinkedToPocketResponse from './model/GetAccountsLinkedToPocketResponse';
import GetAccountsLockPeriodTypeEnum from './model/GetAccountsLockPeriodTypeEnum';
import GetAccountsPageItems from './model/GetAccountsPageItems';
import GetAccountsPurchasedShares from './model/GetAccountsPurchasedShares';
import GetAccountsPurchasedSharesStatus from './model/GetAccountsPurchasedSharesStatus';
import GetAccountsPurchasedSharesType from './model/GetAccountsPurchasedSharesType';
import GetAccountsStatus from './model/GetAccountsStatus';
import GetAccountsSummary from './model/GetAccountsSummary';
import GetAccountsTimeline from './model/GetAccountsTimeline';
import GetAccountsTypeAccountIdResponse from './model/GetAccountsTypeAccountIdResponse';
import GetAccountsTypeProductOptions from './model/GetAccountsTypeProductOptions';
import GetAccountsTypePurchasedShares from './model/GetAccountsTypePurchasedShares';
import GetAccountsTypeResponse from './model/GetAccountsTypeResponse';
import GetAccountsTypeStatus from './model/GetAccountsTypeStatus';
import GetAccountsTypeSummary from './model/GetAccountsTypeSummary';
import GetAccountsTypeTemplateResponse from './model/GetAccountsTypeTemplateResponse';
import GetAccountsTypeTimeline from './model/GetAccountsTypeTimeline';
import GetAssetType from './model/GetAssetType';
import GetCachesResponse from './model/GetCachesResponse';
import GetCentersAccountType from './model/GetCentersAccountType';
import GetCentersCenterIdAccountsResponse from './model/GetCentersCenterIdAccountsResponse';
import GetCentersCenterIdCurrency from './model/GetCentersCenterIdCurrency';
import GetCentersCenterIdResponse from './model/GetCentersCenterIdResponse';
import GetCentersCenterIdStatus from './model/GetCentersCenterIdStatus';
import GetCentersDepositType from './model/GetCentersDepositType';
import GetCentersOfficeOptions from './model/GetCentersOfficeOptions';
import GetCentersPageItems from './model/GetCentersPageItems';
import GetCentersResponse from './model/GetCentersResponse';
import GetCentersSavingsAccounts from './model/GetCentersSavingsAccounts';
import GetCentersStaffOptions from './model/GetCentersStaffOptions';
import GetCentersStatus from './model/GetCentersStatus';
import GetCentersTemplateResponse from './model/GetCentersTemplateResponse';
import GetCentersTimeline from './model/GetCentersTimeline';
import GetChargeAppliesTo from './model/GetChargeAppliesTo';
import GetChargeCalculationType from './model/GetChargeCalculationType';
import GetChargePaymentMode from './model/GetChargePaymentMode';
import GetChargeTimeType from './model/GetChargeTimeType';
import GetChargesAppliesTo from './model/GetChargesAppliesTo';
import GetChargesAppliesToResponse from './model/GetChargesAppliesToResponse';
import GetChargesCalculationTypeResponse from './model/GetChargesCalculationTypeResponse';
import GetChargesChargeCalculationType from './model/GetChargesChargeCalculationType';
import GetChargesChargeTimeType from './model/GetChargesChargeTimeType';
import GetChargesCurrency from './model/GetChargesCurrency';
import GetChargesCurrencyResponse from './model/GetChargesCurrencyResponse';
import GetChargesPaymentModeResponse from './model/GetChargesPaymentModeResponse';
import GetChargesResponse from './model/GetChargesResponse';
import GetChargesTemplateFeeFrequencyOptions from './model/GetChargesTemplateFeeFrequencyOptions';
import GetChargesTemplateLoanChargeCalculationTypeOptions from './model/GetChargesTemplateLoanChargeCalculationTypeOptions';
import GetChargesTemplateLoanChargeTimeTypeOptions from './model/GetChargesTemplateLoanChargeTimeTypeOptions';
import GetChargesTemplateResponse from './model/GetChargesTemplateResponse';
import GetChargesTimeTypeResponse from './model/GetChargesTimeTypeResponse';
import GetClientChargeCalculationType from './model/GetClientChargeCalculationType';
import GetClientChargeCurrency from './model/GetClientChargeCurrency';
import GetClientChargeTimeType from './model/GetClientChargeTimeType';
import GetClientClientIdAddressesResponse from './model/GetClientClientIdAddressesResponse';
import GetClientIdProductIdAccountingMappings from './model/GetClientIdProductIdAccountingMappings';
import GetClientIdProductIdChargeOptions from './model/GetClientIdProductIdChargeOptions';
import GetClientIdProductIdLockinPeriodFrequencyTypeOptions from './model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions';
import GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions from './model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions';
import GetClientIdProductIdProductOptions from './model/GetClientIdProductIdProductOptions';
import GetClientStatus from './model/GetClientStatus';
import GetClientTransactionsCurrency from './model/GetClientTransactionsCurrency';
import GetClientsAllowedDocumentTypes from './model/GetClientsAllowedDocumentTypes';
import GetClientsChargesPageItems from './model/GetClientsChargesPageItems';
import GetClientsClientIdAccountsResponse from './model/GetClientsClientIdAccountsResponse';
import GetClientsClientIdChargesResponse from './model/GetClientsClientIdChargesResponse';
import GetClientsClientIdIdentifiersResponse from './model/GetClientsClientIdIdentifiersResponse';
import GetClientsClientIdIdentifiersTemplateResponse from './model/GetClientsClientIdIdentifiersTemplateResponse';
import GetClientsClientIdResponse from './model/GetClientsClientIdResponse';
import GetClientsClientIdStatus from './model/GetClientsClientIdStatus';
import GetClientsClientIdTransactionsResponse from './model/GetClientsClientIdTransactionsResponse';
import GetClientsClientIdTransactionsTransactionIdResponse from './model/GetClientsClientIdTransactionsTransactionIdResponse';
import GetClientsClientIdTransactionsType from './model/GetClientsClientIdTransactionsType';
import GetClientsColumnHeaderData from './model/GetClientsColumnHeaderData';
import GetClientsDataTables from './model/GetClientsDataTables';
import GetClientsDocumentType from './model/GetClientsDocumentType';
import GetClientsLoanAccounts from './model/GetClientsLoanAccounts';
import GetClientsLoanAccountsStatus from './model/GetClientsLoanAccountsStatus';
import GetClientsLoanAccountsType from './model/GetClientsLoanAccountsType';
import GetClientsOfficeOptions from './model/GetClientsOfficeOptions';
import GetClientsPageItems from './model/GetClientsPageItems';
import GetClientsPageItemsResponse from './model/GetClientsPageItemsResponse';
import GetClientsResponse from './model/GetClientsResponse';
import GetClientsSavingProductOptions from './model/GetClientsSavingProductOptions';
import GetClientsSavingsAccounts from './model/GetClientsSavingsAccounts';
import GetClientsSavingsAccountsCurrency from './model/GetClientsSavingsAccountsCurrency';
import GetClientsSavingsAccountsStatus from './model/GetClientsSavingsAccountsStatus';
import GetClientsStaffOptions from './model/GetClientsStaffOptions';
import GetClientsTemplateResponse from './model/GetClientsTemplateResponse';
import GetClientsTimeline from './model/GetClientsTimeline';
import GetCodeValuesDataResponse from './model/GetCodeValuesDataResponse';
import GetCodesResponse from './model/GetCodesResponse';
import GetCollateralCurrencyResponse from './model/GetCollateralCurrencyResponse';
import GetCollateralTypeResponse from './model/GetCollateralTypeResponse';
import GetCollateralsTemplateAllowedTypes from './model/GetCollateralsTemplateAllowedTypes';
import GetCurrenciesResponse from './model/GetCurrenciesResponse';
import GetDataTablesAppTableIdResponse from './model/GetDataTablesAppTableIdResponse';
import GetDataTablesResponse from './model/GetDataTablesResponse';
import GetEntityDatatableChecksResponse from './model/GetEntityDatatableChecksResponse';
import GetEntityDatatableChecksTemplateResponse from './model/GetEntityDatatableChecksTemplateResponse';
import GetEntityTypeEntityIdDocumentsResponse from './model/GetEntityTypeEntityIdDocumentsResponse';
import GetEquityType from './model/GetEquityType';
import GetFieldConfigurationEntityResponse from './model/GetFieldConfigurationEntityResponse';
import GetFinancialActivityAccountsResponse from './model/GetFinancialActivityAccountsResponse';
import GetFixedDepositAccountsAccountChart from './model/GetFixedDepositAccountsAccountChart';
import GetFixedDepositAccountsAccountChartCurrency from './model/GetFixedDepositAccountsAccountChartCurrency';
import GetFixedDepositAccountsAccountIdCurrency from './model/GetFixedDepositAccountsAccountIdCurrency';
import GetFixedDepositAccountsAccountIdResponse from './model/GetFixedDepositAccountsAccountIdResponse';
import GetFixedDepositAccountsAccountIdSummary from './model/GetFixedDepositAccountsAccountIdSummary';
import GetFixedDepositAccountsChartSlabs from './model/GetFixedDepositAccountsChartSlabs';
import GetFixedDepositAccountsCurrency from './model/GetFixedDepositAccountsCurrency';
import GetFixedDepositAccountsDepositPeriodFrequency from './model/GetFixedDepositAccountsDepositPeriodFrequency';
import GetFixedDepositAccountsInterestCalculationDaysInYearType from './model/GetFixedDepositAccountsInterestCalculationDaysInYearType';
import GetFixedDepositAccountsInterestCalculationType from './model/GetFixedDepositAccountsInterestCalculationType';
import GetFixedDepositAccountsInterestCompoundingPeriodType from './model/GetFixedDepositAccountsInterestCompoundingPeriodType';
import GetFixedDepositAccountsInterestPostingPeriodType from './model/GetFixedDepositAccountsInterestPostingPeriodType';
import GetFixedDepositAccountsMaxDepositTermType from './model/GetFixedDepositAccountsMaxDepositTermType';
import GetFixedDepositAccountsMinDepositTermType from './model/GetFixedDepositAccountsMinDepositTermType';
import GetFixedDepositAccountsPeriodType from './model/GetFixedDepositAccountsPeriodType';
import GetFixedDepositAccountsPeriodTypes from './model/GetFixedDepositAccountsPeriodTypes';
import GetFixedDepositAccountsProductOptions from './model/GetFixedDepositAccountsProductOptions';
import GetFixedDepositAccountsResponse from './model/GetFixedDepositAccountsResponse';
import GetFixedDepositAccountsStatus from './model/GetFixedDepositAccountsStatus';
import GetFixedDepositAccountsSummary from './model/GetFixedDepositAccountsSummary';
import GetFixedDepositAccountsTemplateResponse from './model/GetFixedDepositAccountsTemplateResponse';
import GetFixedDepositAccountsTimeline from './model/GetFixedDepositAccountsTimeline';
import GetFixedDepositProductsAccountingRule from './model/GetFixedDepositProductsAccountingRule';
import GetFixedDepositProductsCurrency from './model/GetFixedDepositProductsCurrency';
import GetFixedDepositProductsInterestCalculationDaysInYearType from './model/GetFixedDepositProductsInterestCalculationDaysInYearType';
import GetFixedDepositProductsInterestCalculationType from './model/GetFixedDepositProductsInterestCalculationType';
import GetFixedDepositProductsInterestCompoundingPeriodType from './model/GetFixedDepositProductsInterestCompoundingPeriodType';
import GetFixedDepositProductsInterestPostingPeriodType from './model/GetFixedDepositProductsInterestPostingPeriodType';
import GetFixedDepositProductsMaxDepositTermType from './model/GetFixedDepositProductsMaxDepositTermType';
import GetFixedDepositProductsMinDepositTermType from './model/GetFixedDepositProductsMinDepositTermType';
import GetFixedDepositProductsProductIdAccountingMappings from './model/GetFixedDepositProductsProductIdAccountingMappings';
import GetFixedDepositProductsProductIdActiveChart from './model/GetFixedDepositProductsProductIdActiveChart';
import GetFixedDepositProductsProductIdChartSlabs from './model/GetFixedDepositProductsProductIdChartSlabs';
import GetFixedDepositProductsProductIdCurrency from './model/GetFixedDepositProductsProductIdCurrency';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappings from './model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge from './model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount from './model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount';
import GetFixedDepositProductsProductIdIncomeFromFeeAccount from './model/GetFixedDepositProductsProductIdIncomeFromFeeAccount';
import GetFixedDepositProductsProductIdIncomeFromPenaltyAccount from './model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount';
import GetFixedDepositProductsProductIdInterestCompoundingPeriodType from './model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType';
import GetFixedDepositProductsProductIdInterestOnSavingsAccount from './model/GetFixedDepositProductsProductIdInterestOnSavingsAccount';
import GetFixedDepositProductsProductIdMaxDepositTermType from './model/GetFixedDepositProductsProductIdMaxDepositTermType';
import GetFixedDepositProductsProductIdMinDepositTermType from './model/GetFixedDepositProductsProductIdMinDepositTermType';
import GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings from './model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings';
import GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge from './model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge';
import GetFixedDepositProductsProductIdPeriodType from './model/GetFixedDepositProductsProductIdPeriodType';
import GetFixedDepositProductsProductIdPreClosurePenalInterestOnType from './model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType';
import GetFixedDepositProductsProductIdResponse from './model/GetFixedDepositProductsProductIdResponse';
import GetFixedDepositProductsProductIdSavingsControlAccount from './model/GetFixedDepositProductsProductIdSavingsControlAccount';
import GetFixedDepositProductsProductIdSavingsReferenceAccount from './model/GetFixedDepositProductsProductIdSavingsReferenceAccount';
import GetFixedDepositProductsProductIdTransfersInSuspenseAccount from './model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount';
import GetFixedDepositProductsResponse from './model/GetFixedDepositProductsResponse';
import GetFloatingRatesFloatingRateIdResponse from './model/GetFloatingRatesFloatingRateIdResponse';
import GetFloatingRatesRatePeriods from './model/GetFloatingRatesRatePeriods';
import GetFloatingRatesResponse from './model/GetFloatingRatesResponse';
import GetFromAccountOptions from './model/GetFromAccountOptions';
import GetFromAccountStandingInstructionSwagger from './model/GetFromAccountStandingInstructionSwagger';
import GetFromAccountTypeOptionsResponseStandingInstructionSwagger from './model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger';
import GetFromAccountTypeResponseStandingInstructionSwagger from './model/GetFromAccountTypeResponseStandingInstructionSwagger';
import GetFromAccountTypeStandingInstructionSwagger from './model/GetFromAccountTypeStandingInstructionSwagger';
import GetFromClientOptionsResponseStandingInstructionSwagger from './model/GetFromClientOptionsResponseStandingInstructionSwagger';
import GetFromClientStandingInstructionSwagger from './model/GetFromClientStandingInstructionSwagger';
import GetFromOfficeOptionsResponseStandingInstructionSwagger from './model/GetFromOfficeOptionsResponseStandingInstructionSwagger';
import GetFromOfficeResponseStandingInstructionSwagger from './model/GetFromOfficeResponseStandingInstructionSwagger';
import GetFromOfficeStandingInstructionSwagger from './model/GetFromOfficeStandingInstructionSwagger';
import GetFundsResponse from './model/GetFundsResponse';
import GetGLAccountsResponse from './model/GetGLAccountsResponse';
import GetGLAccountsTemplateResponse from './model/GetGLAccountsTemplateResponse';
import GetGlClosureResponse from './model/GetGlClosureResponse';
import GetGlobalConfigurationsResponse from './model/GetGlobalConfigurationsResponse';
import GetGroupsGroupIdAccountsLoanAccounts from './model/GetGroupsGroupIdAccountsLoanAccounts';
import GetGroupsGroupIdAccountsLoanType from './model/GetGroupsGroupIdAccountsLoanType';
import GetGroupsGroupIdAccountsMemberLoanAccounts from './model/GetGroupsGroupIdAccountsMemberLoanAccounts';
import GetGroupsGroupIdAccountsMemberLoanStatus from './model/GetGroupsGroupIdAccountsMemberLoanStatus';
import GetGroupsGroupIdAccountsMemberLoanType from './model/GetGroupsGroupIdAccountsMemberLoanType';
import GetGroupsGroupIdAccountsMemberSavingsAccounts from './model/GetGroupsGroupIdAccountsMemberSavingsAccounts';
import GetGroupsGroupIdAccountsResponse from './model/GetGroupsGroupIdAccountsResponse';
import GetGroupsGroupIdAccountsSavingAccountType from './model/GetGroupsGroupIdAccountsSavingAccountType';
import GetGroupsGroupIdAccountsSavingAccounts from './model/GetGroupsGroupIdAccountsSavingAccounts';
import GetGroupsGroupIdAccountsSavingCurrency from './model/GetGroupsGroupIdAccountsSavingCurrency';
import GetGroupsGroupIdAccountsSavingStatus from './model/GetGroupsGroupIdAccountsSavingStatus';
import GetGroupsGroupIdAccountsStatus from './model/GetGroupsGroupIdAccountsStatus';
import GetGroupsGroupIdResponse from './model/GetGroupsGroupIdResponse';
import GetGroupsGroupIdTimeline from './model/GetGroupsGroupIdTimeline';
import GetGroupsPageItems from './model/GetGroupsPageItems';
import GetGroupsResponse from './model/GetGroupsResponse';
import GetGroupsStatus from './model/GetGroupsStatus';
import GetGroupsTemplateClientOptions from './model/GetGroupsTemplateClientOptions';
import GetGroupsTemplateColumnHeaderData from './model/GetGroupsTemplateColumnHeaderData';
import GetGroupsTemplateDatatables from './model/GetGroupsTemplateDatatables';
import GetGroupsTemplateOfficeOptions from './model/GetGroupsTemplateOfficeOptions';
import GetGroupsTemplateResponse from './model/GetGroupsTemplateResponse';
import GetGroupsTemplateStaffOptions from './model/GetGroupsTemplateStaffOptions';
import GetHolidaysResponse from './model/GetHolidaysResponse';
import GetHookResponse from './model/GetHookResponse';
import GetHookTemplateResponse from './model/GetHookTemplateResponse';
import GetIncomeFromFeeAccountId from './model/GetIncomeFromFeeAccountId';
import GetIncomeType from './model/GetIncomeType';
import GetInstructionTypeOptionsResponseStandingInstructionSwagger from './model/GetInstructionTypeOptionsResponseStandingInstructionSwagger';
import GetInstructionTypeStandingInstructionSwagger from './model/GetInstructionTypeStandingInstructionSwagger';
import GetInterestRateChartsChartIdChartSlabsAttributeName from './model/GetInterestRateChartsChartIdChartSlabsAttributeName';
import GetInterestRateChartsChartIdChartSlabsConditionType from './model/GetInterestRateChartsChartIdChartSlabsConditionType';
import GetInterestRateChartsChartIdChartSlabsEntityType from './model/GetInterestRateChartsChartIdChartSlabsEntityType';
import GetInterestRateChartsChartIdChartSlabsIncentiveType from './model/GetInterestRateChartsChartIdChartSlabsIncentiveType';
import GetInterestRateChartsChartIdChartSlabsIncentives from './model/GetInterestRateChartsChartIdChartSlabsIncentives';
import GetInterestRateChartsChartIdChartSlabsResponse from './model/GetInterestRateChartsChartIdChartSlabsResponse';
import GetInterestRateChartsChartSlabs from './model/GetInterestRateChartsChartSlabs';
import GetInterestRateChartsCurrency from './model/GetInterestRateChartsCurrency';
import GetInterestRateChartsResponse from './model/GetInterestRateChartsResponse';
import GetInterestRateChartsTemplatePeriodTypes from './model/GetInterestRateChartsTemplatePeriodTypes';
import GetInterestRateChartsTemplateResponse from './model/GetInterestRateChartsTemplateResponse';
import GetJobsJobIDJobRunHistoryResponse from './model/GetJobsJobIDJobRunHistoryResponse';
import GetJobsResponse from './model/GetJobsResponse';
import GetLoanAccountingMappings from './model/GetLoanAccountingMappings';
import GetLoanCharge from './model/GetLoanCharge';
import GetLoanChargeCalculationType from './model/GetLoanChargeCalculationType';
import GetLoanChargeCurrency from './model/GetLoanChargeCurrency';
import GetLoanChargeTemplateChargeAppliesTo from './model/GetLoanChargeTemplateChargeAppliesTo';
import GetLoanChargeTemplateChargeOptions from './model/GetLoanChargeTemplateChargeOptions';
import GetLoanChargeTemplateChargeTimeType from './model/GetLoanChargeTemplateChargeTimeType';
import GetLoanChargeTimeType from './model/GetLoanChargeTimeType';
import GetLoanCurrency from './model/GetLoanCurrency';
import GetLoanFeeToIncomeAccountMappings from './model/GetLoanFeeToIncomeAccountMappings';
import GetLoanFundSourceAccount from './model/GetLoanFundSourceAccount';
import GetLoanIncomeFromFeeAccount from './model/GetLoanIncomeFromFeeAccount';
import GetLoanIncomeFromPenaltyAccount from './model/GetLoanIncomeFromPenaltyAccount';
import GetLoanInterestOnLoanAccount from './model/GetLoanInterestOnLoanAccount';
import GetLoanOverpaymentLiabilityAccount from './model/GetLoanOverpaymentLiabilityAccount';
import GetLoanPaymentChannelToFundSourceMappings from './model/GetLoanPaymentChannelToFundSourceMappings';
import GetLoanPaymentType from './model/GetLoanPaymentType';
import GetLoanPortfolioAccount from './model/GetLoanPortfolioAccount';
import GetLoanProductsAccountingMappingOptions from './model/GetLoanProductsAccountingMappingOptions';
import GetLoanProductsAccountingRule from './model/GetLoanProductsAccountingRule';
import GetLoanProductsAmortizationType from './model/GetLoanProductsAmortizationType';
import GetLoanProductsAssetAccountOptions from './model/GetLoanProductsAssetAccountOptions';
import GetLoanProductsChargeAppliesTo from './model/GetLoanProductsChargeAppliesTo';
import GetLoanProductsChargeOptions from './model/GetLoanProductsChargeOptions';
import GetLoanProductsCurrency from './model/GetLoanProductsCurrency';
import GetLoanProductsCurrencyOptions from './model/GetLoanProductsCurrencyOptions';
import GetLoanProductsDaysInYearTemplateType from './model/GetLoanProductsDaysInYearTemplateType';
import GetLoanProductsExpenseAccountOptions from './model/GetLoanProductsExpenseAccountOptions';
import GetLoanProductsExpenseType from './model/GetLoanProductsExpenseType';
import GetLoanProductsIncomeAccountOptions from './model/GetLoanProductsIncomeAccountOptions';
import GetLoanProductsIncomeType from './model/GetLoanProductsIncomeType';
import GetLoanProductsInterestRateFrequencyType from './model/GetLoanProductsInterestRateFrequencyType';
import GetLoanProductsInterestRateTemplateFrequencyType from './model/GetLoanProductsInterestRateTemplateFrequencyType';
import GetLoanProductsInterestRecalculationCompoundingFrequencyType from './model/GetLoanProductsInterestRecalculationCompoundingFrequencyType';
import GetLoanProductsInterestRecalculationCompoundingType from './model/GetLoanProductsInterestRecalculationCompoundingType';
import GetLoanProductsInterestRecalculationData from './model/GetLoanProductsInterestRecalculationData';
import GetLoanProductsInterestRecalculationTemplateData from './model/GetLoanProductsInterestRecalculationTemplateData';
import GetLoanProductsInterestTemplateType from './model/GetLoanProductsInterestTemplateType';
import GetLoanProductsInterestType from './model/GetLoanProductsInterestType';
import GetLoanProductsLiabilityAccountOptions from './model/GetLoanProductsLiabilityAccountOptions';
import GetLoanProductsLiabilityTagId from './model/GetLoanProductsLiabilityTagId';
import GetLoanProductsLiabilityType from './model/GetLoanProductsLiabilityType';
import GetLoanProductsLiabilityUsage from './model/GetLoanProductsLiabilityUsage';
import GetLoanProductsParamType from './model/GetLoanProductsParamType';
import GetLoanProductsPaymentTypeOptions from './model/GetLoanProductsPaymentTypeOptions';
import GetLoanProductsPreClosureInterestCalculationStrategy from './model/GetLoanProductsPreClosureInterestCalculationStrategy';
import GetLoanProductsPrincipalVariationsForBorrowerCycle from './model/GetLoanProductsPrincipalVariationsForBorrowerCycle';
import GetLoanProductsProductIdResponse from './model/GetLoanProductsProductIdResponse';
import GetLoanProductsRepaymentFrequencyType from './model/GetLoanProductsRepaymentFrequencyType';
import GetLoanProductsRepaymentTemplateFrequencyType from './model/GetLoanProductsRepaymentTemplateFrequencyType';
import GetLoanProductsRescheduleStrategyType from './model/GetLoanProductsRescheduleStrategyType';
import GetLoanProductsResponse from './model/GetLoanProductsResponse';
import GetLoanProductsTemplateCurrency from './model/GetLoanProductsTemplateCurrency';
import GetLoanProductsTemplateResponse from './model/GetLoanProductsTemplateResponse';
import GetLoanProductsTransactionProcessingStrategyOptions from './model/GetLoanProductsTransactionProcessingStrategyOptions';
import GetLoanProductsValueConditionType from './model/GetLoanProductsValueConditionType';
import GetLoanProductsValueConditionTypeOptions from './model/GetLoanProductsValueConditionTypeOptions';
import GetLoanTransfersInSuspenseAccount from './model/GetLoanTransfersInSuspenseAccount';
import GetLoanWriteOffAccount from './model/GetLoanWriteOffAccount';
import GetLoansChargePaymentMode from './model/GetLoansChargePaymentMode';
import GetLoansCurrency from './model/GetLoansCurrency';
import GetLoansLoanIdAmortizationType from './model/GetLoansLoanIdAmortizationType';
import GetLoansLoanIdChargeCalculationType from './model/GetLoansLoanIdChargeCalculationType';
import GetLoansLoanIdChargePaymentMode from './model/GetLoansLoanIdChargePaymentMode';
import GetLoansLoanIdChargeTimeType from './model/GetLoansLoanIdChargeTimeType';
import GetLoansLoanIdChargesChargeIdResponse from './model/GetLoansLoanIdChargesChargeIdResponse';
import GetLoansLoanIdChargesTemplateResponse from './model/GetLoansLoanIdChargesTemplateResponse';
import GetLoansLoanIdCollateralsResponse from './model/GetLoansLoanIdCollateralsResponse';
import GetLoansLoanIdCollateralsTemplateResponse from './model/GetLoansLoanIdCollateralsTemplateResponse';
import GetLoansLoanIdCurrency from './model/GetLoansLoanIdCurrency';
import GetLoansLoanIdDisbursementDetails from './model/GetLoansLoanIdDisbursementDetails';
import GetLoansLoanIdFeeFrequency from './model/GetLoansLoanIdFeeFrequency';
import GetLoansLoanIdInterestCalculationPeriodType from './model/GetLoansLoanIdInterestCalculationPeriodType';
import GetLoansLoanIdInterestRateFrequencyType from './model/GetLoansLoanIdInterestRateFrequencyType';
import GetLoansLoanIdInterestType from './model/GetLoansLoanIdInterestType';
import GetLoansLoanIdLinkedAccount from './model/GetLoansLoanIdLinkedAccount';
import GetLoansLoanIdLoanType from './model/GetLoansLoanIdLoanType';
import GetLoansLoanIdOverdueCharges from './model/GetLoansLoanIdOverdueCharges';
import GetLoansLoanIdRepaymentFrequencyType from './model/GetLoansLoanIdRepaymentFrequencyType';
import GetLoansLoanIdResponse from './model/GetLoansLoanIdResponse';
import GetLoansLoanIdStatus from './model/GetLoansLoanIdStatus';
import GetLoansLoanIdSummary from './model/GetLoansLoanIdSummary';
import GetLoansLoanIdTermPeriodFrequencyType from './model/GetLoansLoanIdTermPeriodFrequencyType';
import GetLoansLoanIdTimeline from './model/GetLoansLoanIdTimeline';
import GetLoansLoanIdTransactionsTemplateResponse from './model/GetLoansLoanIdTransactionsTemplateResponse';
import GetLoansLoanIdTransactionsTransactionIdResponse from './model/GetLoansLoanIdTransactionsTransactionIdResponse';
import GetLoansProductsDaysInMonthTemplateType from './model/GetLoansProductsDaysInMonthTemplateType';
import GetLoansProductsDaysInMonthType from './model/GetLoansProductsDaysInMonthType';
import GetLoansProductsDaysInYearType from './model/GetLoansProductsDaysInYearType';
import GetLoansProductsInterestCalculationPeriodType from './model/GetLoansProductsInterestCalculationPeriodType';
import GetLoansResponse from './model/GetLoansResponse';
import GetLoansTemplateProductOptions from './model/GetLoansTemplateProductOptions';
import GetLoansTemplateResponse from './model/GetLoansTemplateResponse';
import GetLoansTemplateTimeline from './model/GetLoansTemplateTimeline';
import GetLoansTotal from './model/GetLoansTotal';
import GetLoansTransactionType from './model/GetLoansTransactionType';
import GetLoansType from './model/GetLoansType';
import GetLockPeriodTypeEnum from './model/GetLockPeriodTypeEnum';
import GetMakerCheckerResponse from './model/GetMakerCheckerResponse';
import GetMakerCheckersSearchTemplateResponse from './model/GetMakerCheckersSearchTemplateResponse';
import GetNotesNoteType from './model/GetNotesNoteType';
import GetOfficesResponse from './model/GetOfficesResponse';
import GetOfficesTemplateResponse from './model/GetOfficesTemplateResponse';
import GetPageItemsStandingInstructionSwagger from './model/GetPageItemsStandingInstructionSwagger';
import GetPasswordPreferencesTemplateResponse from './model/GetPasswordPreferencesTemplateResponse';
import GetPaymentTypesPaymentTypeIdResponse from './model/GetPaymentTypesPaymentTypeIdResponse';
import GetPaymentTypesResponse from './model/GetPaymentTypesResponse';
import GetPermissionsResponse from './model/GetPermissionsResponse';
import GetPocketData from './model/GetPocketData';
import GetPocketLoanAccounts from './model/GetPocketLoanAccounts';
import GetPocketSavingAccounts from './model/GetPocketSavingAccounts';
import GetPriorityOptionsResponseStandingInstructionSwagger from './model/GetPriorityOptionsResponseStandingInstructionSwagger';
import GetPriorityStandingInstructionSwagger from './model/GetPriorityStandingInstructionSwagger';
import GetProductsAccountingMappingOptions from './model/GetProductsAccountingMappingOptions';
import GetProductsAccountingMappings from './model/GetProductsAccountingMappings';
import GetProductsAccountingRule from './model/GetProductsAccountingRule';
import GetProductsAssetAccountOptions from './model/GetProductsAssetAccountOptions';
import GetProductsCharges from './model/GetProductsCharges';
import GetProductsCurrency from './model/GetProductsCurrency';
import GetProductsEquityAccountOptions from './model/GetProductsEquityAccountOptions';
import GetProductsIncomeAccountOptions from './model/GetProductsIncomeAccountOptions';
import GetProductsLiabilityAccountOptions from './model/GetProductsLiabilityAccountOptions';
import GetProductsLiabilityType from './model/GetProductsLiabilityType';
import GetProductsLiabilityUsage from './model/GetProductsLiabilityUsage';
import GetProductsMarketPrice from './model/GetProductsMarketPrice';
import GetProductsMinimumActivePeriodFrequencyTypeOptions from './model/GetProductsMinimumActivePeriodFrequencyTypeOptions';
import GetProductsPageItems from './model/GetProductsPageItems';
import GetProductsTagId from './model/GetProductsTagId';
import GetProductsTypeProductIdResponse from './model/GetProductsTypeProductIdResponse';
import GetProductsTypeResponse from './model/GetProductsTypeResponse';
import GetProvisioningCriteriaCriteriaIdResponse from './model/GetProvisioningCriteriaCriteriaIdResponse';
import GetProvisioningCriteriaResponse from './model/GetProvisioningCriteriaResponse';
import GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger from './model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger';
import GetRecurrenceFrequencyStandingInstructionSwagger from './model/GetRecurrenceFrequencyStandingInstructionSwagger';
import GetRecurrenceTypeOptionsResponseStandingInstructionSwagger from './model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger';
import GetRecurrenceTypeStandingInstructionSwagger from './model/GetRecurrenceTypeStandingInstructionSwagger';
import GetRecurringCurrency from './model/GetRecurringCurrency';
import GetRecurringDepositAccountsAccountChart from './model/GetRecurringDepositAccountsAccountChart';
import GetRecurringDepositAccountsAccountChartCurrency from './model/GetRecurringDepositAccountsAccountChartCurrency';
import GetRecurringDepositAccountsAccountIdResponse from './model/GetRecurringDepositAccountsAccountIdResponse';
import GetRecurringDepositAccountsChartSlabs from './model/GetRecurringDepositAccountsChartSlabs';
import GetRecurringDepositAccountsCurrency from './model/GetRecurringDepositAccountsCurrency';
import GetRecurringDepositAccountsDepositPeriodFrequency from './model/GetRecurringDepositAccountsDepositPeriodFrequency';
import GetRecurringDepositAccountsInterestCalculationDaysInYearType from './model/GetRecurringDepositAccountsInterestCalculationDaysInYearType';
import GetRecurringDepositAccountsInterestCalculationType from './model/GetRecurringDepositAccountsInterestCalculationType';
import GetRecurringDepositAccountsInterestCompoundingPeriodType from './model/GetRecurringDepositAccountsInterestCompoundingPeriodType';
import GetRecurringDepositAccountsInterestPostingPeriodType from './model/GetRecurringDepositAccountsInterestPostingPeriodType';
import GetRecurringDepositAccountsMaxDepositTermType from './model/GetRecurringDepositAccountsMaxDepositTermType';
import GetRecurringDepositAccountsMinDepositTermType from './model/GetRecurringDepositAccountsMinDepositTermType';
import GetRecurringDepositAccountsPeriodType from './model/GetRecurringDepositAccountsPeriodType';
import GetRecurringDepositAccountsPeriodTypes from './model/GetRecurringDepositAccountsPeriodTypes';
import GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse from './model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse';
import GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse from './model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse';
import GetRecurringDepositAccountsRecurringDepositFrequencyType from './model/GetRecurringDepositAccountsRecurringDepositFrequencyType';
import GetRecurringDepositAccountsResponse from './model/GetRecurringDepositAccountsResponse';
import GetRecurringDepositAccountsStatus from './model/GetRecurringDepositAccountsStatus';
import GetRecurringDepositAccountsSummary from './model/GetRecurringDepositAccountsSummary';
import GetRecurringDepositAccountsTemplateResponse from './model/GetRecurringDepositAccountsTemplateResponse';
import GetRecurringDepositAccountsTimeline from './model/GetRecurringDepositAccountsTimeline';
import GetRecurringDepositProductsAccountingRule from './model/GetRecurringDepositProductsAccountingRule';
import GetRecurringDepositProductsCurrency from './model/GetRecurringDepositProductsCurrency';
import GetRecurringDepositProductsInterestCalculationDaysInYearType from './model/GetRecurringDepositProductsInterestCalculationDaysInYearType';
import GetRecurringDepositProductsInterestCalculationType from './model/GetRecurringDepositProductsInterestCalculationType';
import GetRecurringDepositProductsInterestCompoundingPeriodType from './model/GetRecurringDepositProductsInterestCompoundingPeriodType';
import GetRecurringDepositProductsInterestPostingPeriodType from './model/GetRecurringDepositProductsInterestPostingPeriodType';
import GetRecurringDepositProductsMaxDepositTermType from './model/GetRecurringDepositProductsMaxDepositTermType';
import GetRecurringDepositProductsMinDepositTermType from './model/GetRecurringDepositProductsMinDepositTermType';
import GetRecurringDepositProductsProductIdAccountingMappings from './model/GetRecurringDepositProductsProductIdAccountingMappings';
import GetRecurringDepositProductsProductIdActiveChart from './model/GetRecurringDepositProductsProductIdActiveChart';
import GetRecurringDepositProductsProductIdChartSlabs from './model/GetRecurringDepositProductsProductIdChartSlabs';
import GetRecurringDepositProductsProductIdCurrency from './model/GetRecurringDepositProductsProductIdCurrency';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings from './model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge from './model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount from './model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount';
import GetRecurringDepositProductsProductIdIncomeFromFeeAccount from './model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount';
import GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount from './model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount';
import GetRecurringDepositProductsProductIdInterestCompoundingPeriodType from './model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType';
import GetRecurringDepositProductsProductIdInterestOnSavingsAccount from './model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount';
import GetRecurringDepositProductsProductIdMaxDepositTermType from './model/GetRecurringDepositProductsProductIdMaxDepositTermType';
import GetRecurringDepositProductsProductIdMinDepositTermType from './model/GetRecurringDepositProductsProductIdMinDepositTermType';
import GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings from './model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings';
import GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge from './model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge';
import GetRecurringDepositProductsProductIdPeriodType from './model/GetRecurringDepositProductsProductIdPeriodType';
import GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType from './model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType';
import GetRecurringDepositProductsProductIdResponse from './model/GetRecurringDepositProductsProductIdResponse';
import GetRecurringDepositProductsProductIdSavingsControlAccount from './model/GetRecurringDepositProductsProductIdSavingsControlAccount';
import GetRecurringDepositProductsProductIdSavingsReferenceAccount from './model/GetRecurringDepositProductsProductIdSavingsReferenceAccount';
import GetRecurringDepositProductsProductIdTransfersInSuspenseAccount from './model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount';
import GetRecurringDepositProductsRecurringDepositFrequencyType from './model/GetRecurringDepositProductsRecurringDepositFrequencyType';
import GetRecurringDepositProductsResponse from './model/GetRecurringDepositProductsResponse';
import GetRecurringPaymentDetailData from './model/GetRecurringPaymentDetailData';
import GetRecurringPaymentType from './model/GetRecurringPaymentType';
import GetRecurringProductOptions from './model/GetRecurringProductOptions';
import GetRecurringTransactionType from './model/GetRecurringTransactionType';
import GetRecurringTransactionsCurrency from './model/GetRecurringTransactionsCurrency';
import GetRecurringTransactionsTransactionType from './model/GetRecurringTransactionsTransactionType';
import GetReportMailingJobsResponse from './model/GetReportMailingJobsResponse';
import GetReportMailingJobsTemplate from './model/GetReportMailingJobsTemplate';
import GetReportNameResponse from './model/GetReportNameResponse';
import GetReportsResponse from './model/GetReportsResponse';
import GetReportsTemplateResponse from './model/GetReportsTemplateResponse';
import GetResourceTypeResourceIdNotesNoteIdResponse from './model/GetResourceTypeResourceIdNotesNoteIdResponse';
import GetResourceTypeResourceIdNotesResponse from './model/GetResourceTypeResourceIdNotesResponse';
import GetRolesResponse from './model/GetRolesResponse';
import GetRolesRoleIdPermissionsResponse from './model/GetRolesRoleIdPermissionsResponse';
import GetRolesRoleIdPermissionsResponsePermissionData from './model/GetRolesRoleIdPermissionsResponsePermissionData';
import GetRolesRoleIdResponse from './model/GetRolesRoleIdResponse';
import GetRunReportColumnHeaders from './model/GetRunReportColumnHeaders';
import GetRunReportResponse from './model/GetRunReportResponse';
import GetSavingsAccountsAccountIdResponse from './model/GetSavingsAccountsAccountIdResponse';
import GetSavingsAccountsResponse from './model/GetSavingsAccountsResponse';
import GetSavingsAccountsSavingsAccountIdChargesResponse from './model/GetSavingsAccountsSavingsAccountIdChargesResponse';
import GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from './model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import GetSavingsAccountsSavingsAccountIdChargesTemplateResponse from './model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse';
import GetSavingsAccountsSummary from './model/GetSavingsAccountsSummary';
import GetSavingsAccountsTemplateResponse from './model/GetSavingsAccountsTemplateResponse';
import GetSavingsAssetLiabilityType from './model/GetSavingsAssetLiabilityType';
import GetSavingsChargeCalculationType from './model/GetSavingsChargeCalculationType';
import GetSavingsChargePaymentMode from './model/GetSavingsChargePaymentMode';
import GetSavingsChargeTimeType from './model/GetSavingsChargeTimeType';
import GetSavingsChargesChargeTimeType from './model/GetSavingsChargesChargeTimeType';
import GetSavingsChargesOptions from './model/GetSavingsChargesOptions';
import GetSavingsCurrency from './model/GetSavingsCurrency';
import GetSavingsInterestCalculationDaysInYearType from './model/GetSavingsInterestCalculationDaysInYearType';
import GetSavingsInterestCalculationType from './model/GetSavingsInterestCalculationType';
import GetSavingsInterestCompoundingPeriodType from './model/GetSavingsInterestCompoundingPeriodType';
import GetSavingsInterestPostingPeriodType from './model/GetSavingsInterestPostingPeriodType';
import GetSavingsPageItems from './model/GetSavingsPageItems';
import GetSavingsProductOptions from './model/GetSavingsProductOptions';
import GetSavingsProductsAccountingMappingOptions from './model/GetSavingsProductsAccountingMappingOptions';
import GetSavingsProductsAccountingMappings from './model/GetSavingsProductsAccountingMappings';
import GetSavingsProductsAccountingRule from './model/GetSavingsProductsAccountingRule';
import GetSavingsProductsAssetAccountOptions from './model/GetSavingsProductsAssetAccountOptions';
import GetSavingsProductsChargeAppliesTo from './model/GetSavingsProductsChargeAppliesTo';
import GetSavingsProductsChargeOptions from './model/GetSavingsProductsChargeOptions';
import GetSavingsProductsExpenseAccountOptions from './model/GetSavingsProductsExpenseAccountOptions';
import GetSavingsProductsExpenseType from './model/GetSavingsProductsExpenseType';
import GetSavingsProductsFeeToIncomeAccountMappings from './model/GetSavingsProductsFeeToIncomeAccountMappings';
import GetSavingsProductsFeeToIncomeAccountMappingsCharge from './model/GetSavingsProductsFeeToIncomeAccountMappingsCharge';
import GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount from './model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount';
import GetSavingsProductsFundSourceAccount from './model/GetSavingsProductsFundSourceAccount';
import GetSavingsProductsIncomeAccountOptions from './model/GetSavingsProductsIncomeAccountOptions';
import GetSavingsProductsIncomeFromFeeAccount from './model/GetSavingsProductsIncomeFromFeeAccount';
import GetSavingsProductsIncomeFromPenaltyAccount from './model/GetSavingsProductsIncomeFromPenaltyAccount';
import GetSavingsProductsIncomeType from './model/GetSavingsProductsIncomeType';
import GetSavingsProductsInterestCalculationDaysInYearType from './model/GetSavingsProductsInterestCalculationDaysInYearType';
import GetSavingsProductsInterestCalculationType from './model/GetSavingsProductsInterestCalculationType';
import GetSavingsProductsInterestCompoundingPeriodType from './model/GetSavingsProductsInterestCompoundingPeriodType';
import GetSavingsProductsInterestOnSavingsAccount from './model/GetSavingsProductsInterestOnSavingsAccount';
import GetSavingsProductsInterestPostingPeriodType from './model/GetSavingsProductsInterestPostingPeriodType';
import GetSavingsProductsLiabilityAccountOptions from './model/GetSavingsProductsLiabilityAccountOptions';
import GetSavingsProductsLiabilityTagId from './model/GetSavingsProductsLiabilityTagId';
import GetSavingsProductsLiabilityType from './model/GetSavingsProductsLiabilityType';
import GetSavingsProductsLiabilityUsage from './model/GetSavingsProductsLiabilityUsage';
import GetSavingsProductsLockinPeriodFrequencyTypeOptions from './model/GetSavingsProductsLockinPeriodFrequencyTypeOptions';
import GetSavingsProductsPaymentChannelToFundSourceMappings from './model/GetSavingsProductsPaymentChannelToFundSourceMappings';
import GetSavingsProductsPaymentType from './model/GetSavingsProductsPaymentType';
import GetSavingsProductsPaymentTypeOptions from './model/GetSavingsProductsPaymentTypeOptions';
import GetSavingsProductsPenaltyToIncomeAccountMappings from './model/GetSavingsProductsPenaltyToIncomeAccountMappings';
import GetSavingsProductsPenaltyToIncomeAccountMappingsCharge from './model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge';
import GetSavingsProductsProductIdResponse from './model/GetSavingsProductsProductIdResponse';
import GetSavingsProductsResponse from './model/GetSavingsProductsResponse';
import GetSavingsProductsSavingsControlAccount from './model/GetSavingsProductsSavingsControlAccount';
import GetSavingsProductsSavingsReferenceAccount from './model/GetSavingsProductsSavingsReferenceAccount';
import GetSavingsProductsTemplateAccountingRule from './model/GetSavingsProductsTemplateAccountingRule';
import GetSavingsProductsTemplateResponse from './model/GetSavingsProductsTemplateResponse';
import GetSavingsProductsTransfersInSuspenseAccount from './model/GetSavingsProductsTransfersInSuspenseAccount';
import GetSavingsProductsWithdrawalFeeTypeOptions from './model/GetSavingsProductsWithdrawalFeeTypeOptions';
import GetSavingsStatus from './model/GetSavingsStatus';
import GetSavingsSummary from './model/GetSavingsSummary';
import GetSavingsTimeline from './model/GetSavingsTimeline';
import GetSchedulerResponse from './model/GetSchedulerResponse';
import GetSearchResponse from './model/GetSearchResponse';
import GetSelfBeneficiariesAccountOptions from './model/GetSelfBeneficiariesAccountOptions';
import GetSelfBeneficiariesTPTResponse from './model/GetSelfBeneficiariesTPTResponse';
import GetSelfBeneficiariesTPTTemplateResponse from './model/GetSelfBeneficiariesTPTTemplateResponse';
import GetSelfClientsChargeCalculationType from './model/GetSelfClientsChargeCalculationType';
import GetSelfClientsChargeTimeType from './model/GetSelfClientsChargeTimeType';
import GetSelfClientsChargesPageItems from './model/GetSelfClientsChargesPageItems';
import GetSelfClientsClientIdAccountsResponse from './model/GetSelfClientsClientIdAccountsResponse';
import GetSelfClientsClientIdChargesChargeIdResponse from './model/GetSelfClientsClientIdChargesChargeIdResponse';
import GetSelfClientsClientIdChargesResponse from './model/GetSelfClientsClientIdChargesResponse';
import GetSelfClientsClientIdResponse from './model/GetSelfClientsClientIdResponse';
import GetSelfClientsClientIdTransactionsPageItems from './model/GetSelfClientsClientIdTransactionsPageItems';
import GetSelfClientsClientIdTransactionsResponse from './model/GetSelfClientsClientIdTransactionsResponse';
import GetSelfClientsClientIdTransactionsTransactionIdResponse from './model/GetSelfClientsClientIdTransactionsTransactionIdResponse';
import GetSelfClientsClientIdTransactionsType from './model/GetSelfClientsClientIdTransactionsType';
import GetSelfClientsLoanAccounts from './model/GetSelfClientsLoanAccounts';
import GetSelfClientsLoanAccountsStatus from './model/GetSelfClientsLoanAccountsStatus';
import GetSelfClientsLoanAccountsType from './model/GetSelfClientsLoanAccountsType';
import GetSelfClientsPageItems from './model/GetSelfClientsPageItems';
import GetSelfClientsResponse from './model/GetSelfClientsResponse';
import GetSelfClientsSavingsAccounts from './model/GetSelfClientsSavingsAccounts';
import GetSelfClientsSavingsAccountsCurrency from './model/GetSelfClientsSavingsAccountsCurrency';
import GetSelfClientsSavingsAccountsStatus from './model/GetSelfClientsSavingsAccountsStatus';
import GetSelfClientsStatus from './model/GetSelfClientsStatus';
import GetSelfClientsTimeline from './model/GetSelfClientsTimeline';
import GetSelfLoansChargeCalculationType from './model/GetSelfLoansChargeCalculationType';
import GetSelfLoansChargeTimeType from './model/GetSelfLoansChargeTimeType';
import GetSelfLoansLoanIdChargesResponse from './model/GetSelfLoansLoanIdChargesResponse';
import GetSelfLoansLoanIdResponse from './model/GetSelfLoansLoanIdResponse';
import GetSelfLoansLoanIdTransactionsTransactionIdResponse from './model/GetSelfLoansLoanIdTransactionsTransactionIdResponse';
import GetSelfLoansLoanIdTransactionsType from './model/GetSelfLoansLoanIdTransactionsType';
import GetSelfLoansProductOptions from './model/GetSelfLoansProductOptions';
import GetSelfLoansTemplateResponse from './model/GetSelfLoansTemplateResponse';
import GetSelfLoansTimeline from './model/GetSelfLoansTimeline';
import GetSelfSavingsAccountsAccountIdChargesResponse from './model/GetSelfSavingsAccountsAccountIdChargesResponse';
import GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse from './model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse';
import GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse from './model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse';
import GetSelfSavingsAccountsResponse from './model/GetSelfSavingsAccountsResponse';
import GetSelfSavingsChargeCalculationType from './model/GetSelfSavingsChargeCalculationType';
import GetSelfSavingsChargeTimeType from './model/GetSelfSavingsChargeTimeType';
import GetSelfSavingsCurrency from './model/GetSelfSavingsCurrency';
import GetSelfSavingsInterestCalculationDaysInYearType from './model/GetSelfSavingsInterestCalculationDaysInYearType';
import GetSelfSavingsInterestCalculationType from './model/GetSelfSavingsInterestCalculationType';
import GetSelfSavingsInterestCompoundingPeriodType from './model/GetSelfSavingsInterestCompoundingPeriodType';
import GetSelfSavingsInterestPostingPeriodType from './model/GetSelfSavingsInterestPostingPeriodType';
import GetSelfSavingsPaymentDetailData from './model/GetSelfSavingsPaymentDetailData';
import GetSelfSavingsPaymentType from './model/GetSelfSavingsPaymentType';
import GetSelfSavingsStatus from './model/GetSelfSavingsStatus';
import GetSelfSavingsSummary from './model/GetSelfSavingsSummary';
import GetSelfSavingsTimeline from './model/GetSelfSavingsTimeline';
import GetSelfSavingsTransactionCurrency from './model/GetSelfSavingsTransactionCurrency';
import GetSelfSavingsTransactionType from './model/GetSelfSavingsTransactionType';
import GetSelfUserDetailsOrganisationalRole from './model/GetSelfUserDetailsOrganisationalRole';
import GetSelfUserDetailsResponse from './model/GetSelfUserDetailsResponse';
import GetSelfUserDetailsRoles from './model/GetSelfUserDetailsRoles';
import GetShareAccountsChargeAppliesTo from './model/GetShareAccountsChargeAppliesTo';
import GetShareAccountsChargeCalculationType from './model/GetShareAccountsChargeCalculationType';
import GetShareAccountsChargeOptions from './model/GetShareAccountsChargeOptions';
import GetShareAccountsChargePaymentMode from './model/GetShareAccountsChargePaymentMode';
import GetShareAccountsChargeTimeType from './model/GetShareAccountsChargeTimeType';
import GetShareAccountsClientIdProductIdAccountingRule from './model/GetShareAccountsClientIdProductIdAccountingRule';
import GetShareAccountsClientIdProductIdLockPeriodTypeEnum from './model/GetShareAccountsClientIdProductIdLockPeriodTypeEnum';
import GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum from './model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum';
import GetShareAccountsClientIdProductIdResponse from './model/GetShareAccountsClientIdProductIdResponse';
import GetShareAccountsCurrency from './model/GetShareAccountsCurrency';
import GetShareAccountsIncomeFromFeeAccountId from './model/GetShareAccountsIncomeFromFeeAccountId';
import GetShareAccountsShareEquityId from './model/GetShareAccountsShareEquityId';
import GetShareAccountsShareReferenceId from './model/GetShareAccountsShareReferenceId';
import GetShareAccountsShareSuspenseId from './model/GetShareAccountsShareSuspenseId';
import GetShareEquityId from './model/GetShareEquityId';
import GetShareReferenceId from './model/GetShareReferenceId';
import GetShareSuspenseId from './model/GetShareSuspenseId';
import GetStaffResponse from './model/GetStaffResponse';
import GetStandingInstructionHistoryFromAccount from './model/GetStandingInstructionHistoryFromAccount';
import GetStandingInstructionHistoryPageItemsFromClient from './model/GetStandingInstructionHistoryPageItemsFromClient';
import GetStandingInstructionHistoryPageItemsResponse from './model/GetStandingInstructionHistoryPageItemsResponse';
import GetStandingInstructionHistoryToAccount from './model/GetStandingInstructionHistoryToAccount';
import GetStandingInstructionHistoryToClient from './model/GetStandingInstructionHistoryToClient';
import GetStandingInstructionRunHistoryResponse from './model/GetStandingInstructionRunHistoryResponse';
import GetStandingInstructionsResponse from './model/GetStandingInstructionsResponse';
import GetStandingInstructionsStandingInstructionIdResponse from './model/GetStandingInstructionsStandingInstructionIdResponse';
import GetStandingInstructionsTemplateResponse from './model/GetStandingInstructionsTemplateResponse';
import GetStatusOptionsResponseStandingInstructionSwagger from './model/GetStatusOptionsResponseStandingInstructionSwagger';
import GetStatusStandingInstructionSwagger from './model/GetStatusStandingInstructionSwagger';
import GetSurveyResponse from './model/GetSurveyResponse';
import GetSurveyResponseDatatableData from './model/GetSurveyResponseDatatableData';
import GetTaxesComponentsCreditAccount from './model/GetTaxesComponentsCreditAccount';
import GetTaxesComponentsCreditAccountType from './model/GetTaxesComponentsCreditAccountType';
import GetTaxesComponentsResponse from './model/GetTaxesComponentsResponse';
import GetTaxesGroupResponse from './model/GetTaxesGroupResponse';
import GetTaxesGroupTaxAssociations from './model/GetTaxesGroupTaxAssociations';
import GetTaxesGroupTaxComponent from './model/GetTaxesGroupTaxComponent';
import GetTellersResponse from './model/GetTellersResponse';
import GetTellersTellerIdCashiersCashierIdResponse from './model/GetTellersTellerIdCashiersCashierIdResponse';
import GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse from './model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse';
import GetTellersTellerIdCashiersCashiersIdTransactionsResponse from './model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse';
import GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse from './model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse';
import GetTellersTellerIdCashiersResponse from './model/GetTellersTellerIdCashiersResponse';
import GetTellersTellerIdCashiersTemplateResponse from './model/GetTellersTellerIdCashiersTemplateResponse';
import GetTemplatesResponse from './model/GetTemplatesResponse';
import GetTemplatesTemplateIdResponse from './model/GetTemplatesTemplateIdResponse';
import GetTemplatesTemplateResponse from './model/GetTemplatesTemplateResponse';
import GetToAccountStandingInstructionSwagger from './model/GetToAccountStandingInstructionSwagger';
import GetToAccountTypeOptionsResponseStandingInstructionSwagger from './model/GetToAccountTypeOptionsResponseStandingInstructionSwagger';
import GetToAccountTypeStandingInstructionSwagger from './model/GetToAccountTypeStandingInstructionSwagger';
import GetToClientStandingInstructionSwagger from './model/GetToClientStandingInstructionSwagger';
import GetToOfficeOptionsResponseStandingInstructionSwagger from './model/GetToOfficeOptionsResponseStandingInstructionSwagger';
import GetToOfficeStandingInstructionSwagger from './model/GetToOfficeStandingInstructionSwagger';
import GetTransferTypeOptionsResponseStandingInstructionSwagger from './model/GetTransferTypeOptionsResponseStandingInstructionSwagger';
import GetTransferTypeStandingInstructionSwagger from './model/GetTransferTypeStandingInstructionSwagger';
import GetUserDetailsResponse from './model/GetUserDetailsResponse';
import GetUsersResponse from './model/GetUsersResponse';
import GetUsersTemplateResponse from './model/GetUsersTemplateResponse';
import GetUsersUserIdResponse from './model/GetUsersUserIdResponse';
import GetWorkingDaysResponse from './model/GetWorkingDaysResponse';
import GetWorkingDaysTemplateResponse from './model/GetWorkingDaysTemplateResponse';
import GlobalConfigurationPropertyData from './model/GlobalConfigurationPropertyData';
import GrantedAuthority from './model/GrantedAuthority';
import Group from './model/Group';
import GroupLevel from './model/GroupLevel';
import Grouping from './model/Grouping';
import Header from './model/Header';
import HookTemplateData from './model/HookTemplateData';
import IdDocument from './model/IdDocument';
import Image from './model/Image';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject10 from './model/InlineObject10';
import InlineObject11 from './model/InlineObject11';
import InlineObject12 from './model/InlineObject12';
import InlineObject13 from './model/InlineObject13';
import InlineObject14 from './model/InlineObject14';
import InlineObject15 from './model/InlineObject15';
import InlineObject16 from './model/InlineObject16';
import InlineObject17 from './model/InlineObject17';
import InlineObject18 from './model/InlineObject18';
import InlineObject19 from './model/InlineObject19';
import InlineObject2 from './model/InlineObject2';
import InlineObject20 from './model/InlineObject20';
import InlineObject21 from './model/InlineObject21';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import InteropAccountData from './model/InteropAccountData';
import InteropIdentifierAccountResponseData from './model/InteropIdentifierAccountResponseData';
import InteropIdentifierRequestData from './model/InteropIdentifierRequestData';
import InteropIdentifiersResponseData from './model/InteropIdentifiersResponseData';
import InteropKycResponseData from './model/InteropKycResponseData';
import InteropQuoteRequestData from './model/InteropQuoteRequestData';
import InteropQuoteResponseData from './model/InteropQuoteResponseData';
import InteropTransactionRequestData from './model/InteropTransactionRequestData';
import InteropTransactionRequestResponseData from './model/InteropTransactionRequestResponseData';
import InteropTransactionTypeData from './model/InteropTransactionTypeData';
import InteropTransactionsData from './model/InteropTransactionsData';
import InteropTransferRequestData from './model/InteropTransferRequestData';
import InteropTransferResponseData from './model/InteropTransferResponseData';
import JobDetailHistoryDataSwagger from './model/JobDetailHistoryDataSwagger';
import JournalEntryCommand from './model/JournalEntryCommand';
import JournalEntryData from './model/JournalEntryData';
import LoanProduct from './model/LoanProduct';
import LoanProductBorrowerCycleVariationData from './model/LoanProductBorrowerCycleVariationData';
import LoanProductConfigurableAttributes from './model/LoanProductConfigurableAttributes';
import LoanProductData from './model/LoanProductData';
import LoanProductFloatingRates from './model/LoanProductFloatingRates';
import LoanProductGuaranteeDetails from './model/LoanProductGuaranteeDetails';
import LoanProductInterestRecalculationData from './model/LoanProductInterestRecalculationData';
import LoanProductInterestRecalculationDetails from './model/LoanProductInterestRecalculationDetails';
import LoanProductProvisioningEntryData from './model/LoanProductProvisioningEntryData';
import LoanProductRelatedDetail from './model/LoanProductRelatedDetail';
import LoanTransactionProcessingStrategy from './model/LoanTransactionProcessingStrategy';
import LookupTableData from './model/LookupTableData';
import LookupTableEntry from './model/LookupTableEntry';
import MonetaryCurrency from './model/MonetaryCurrency';
import Money from './model/Money';
import MoneyData from './model/MoneyData';
import MultiPart from './model/MultiPart';
import Office from './model/Office';
import OfficeData from './model/OfficeData';
import PageCashierTransactionData from './model/PageCashierTransactionData';
import ParameterizedHeader from './model/ParameterizedHeader';
import Permission from './model/Permission';
import PostAccountNumberFormatsRequest from './model/PostAccountNumberFormatsRequest';
import PostAccountNumberFormatsResponse from './model/PostAccountNumberFormatsResponse';
import PostAccountTransfersRefundByTransferRequest from './model/PostAccountTransfersRefundByTransferRequest';
import PostAccountTransfersRefundByTransferResponse from './model/PostAccountTransfersRefundByTransferResponse';
import PostAccountTransfersRequest from './model/PostAccountTransfersRequest';
import PostAccountTransfersResponse from './model/PostAccountTransfersResponse';
import PostAccountingRulesRequest from './model/PostAccountingRulesRequest';
import PostAccountingRulesResponse from './model/PostAccountingRulesResponse';
import PostAccountsCharges from './model/PostAccountsCharges';
import PostAccountsRequestedShares from './model/PostAccountsRequestedShares';
import PostAccountsTypeAccountIdRequest from './model/PostAccountsTypeAccountIdRequest';
import PostAccountsTypeAccountIdResponse from './model/PostAccountsTypeAccountIdResponse';
import PostAccountsTypeRequest from './model/PostAccountsTypeRequest';
import PostAccountsTypeResponse from './model/PostAccountsTypeResponse';
import PostAdhocQuerySearchRequest from './model/PostAdhocQuerySearchRequest';
import PostAdhocQuerySearchResponse from './model/PostAdhocQuerySearchResponse';
import PostAuthenticationResponse from './model/PostAuthenticationResponse';
import PostBatchesRequest from './model/PostBatchesRequest';
import PostBodyRequestSwagger from './model/PostBodyRequestSwagger';
import PostCentersCenterIdRequest from './model/PostCentersCenterIdRequest';
import PostCentersCenterIdResponse from './model/PostCentersCenterIdResponse';
import PostCentersRequest from './model/PostCentersRequest';
import PostCentersResponse from './model/PostCentersResponse';
import PostChargesRequest from './model/PostChargesRequest';
import PostChargesResponse from './model/PostChargesResponse';
import PostClientClientIdAddressesRequest from './model/PostClientClientIdAddressesRequest';
import PostClientClientIdAddressesResponse from './model/PostClientClientIdAddressesResponse';
import PostClientsClientIdChargesChargeIdRequest from './model/PostClientsClientIdChargesChargeIdRequest';
import PostClientsClientIdChargesChargeIdResponse from './model/PostClientsClientIdChargesChargeIdResponse';
import PostClientsClientIdChargesRequest from './model/PostClientsClientIdChargesRequest';
import PostClientsClientIdChargesResponse from './model/PostClientsClientIdChargesResponse';
import PostClientsClientIdIdentifiersRequest from './model/PostClientsClientIdIdentifiersRequest';
import PostClientsClientIdIdentifiersResponse from './model/PostClientsClientIdIdentifiersResponse';
import PostClientsClientIdRequest from './model/PostClientsClientIdRequest';
import PostClientsClientIdResponse from './model/PostClientsClientIdResponse';
import PostClientsClientIdTransactionsTransactionIdResponse from './model/PostClientsClientIdTransactionsTransactionIdResponse';
import PostClientsRequest from './model/PostClientsRequest';
import PostClientsResponse from './model/PostClientsResponse';
import PostCodeValueDataResponse from './model/PostCodeValueDataResponse';
import PostCodeValuesDataRequest from './model/PostCodeValuesDataRequest';
import PostCodesRequest from './model/PostCodesRequest';
import PostCodesResponse from './model/PostCodesResponse';
import PostCollectionSheetBulkRepaymentTransactions from './model/PostCollectionSheetBulkRepaymentTransactions';
import PostCollectionSheetChanges from './model/PostCollectionSheetChanges';
import PostCollectionSheetRequest from './model/PostCollectionSheetRequest';
import PostCollectionSheetResponse from './model/PostCollectionSheetResponse';
import PostDataTablesAppTableIdRequest from './model/PostDataTablesAppTableIdRequest';
import PostDataTablesAppTableIdResponse from './model/PostDataTablesAppTableIdResponse';
import PostDataTablesRequest from './model/PostDataTablesRequest';
import PostDataTablesResponse from './model/PostDataTablesResponse';
import PostEntityDatatableChecksTemplateRequest from './model/PostEntityDatatableChecksTemplateRequest';
import PostEntityDatatableChecksTemplateResponse from './model/PostEntityDatatableChecksTemplateResponse';
import PostEntityTypeEntityIdDocumentsResponse from './model/PostEntityTypeEntityIdDocumentsResponse';
import PostFinancialActivityAccountsRequest from './model/PostFinancialActivityAccountsRequest';
import PostFinancialActivityAccountsResponse from './model/PostFinancialActivityAccountsResponse';
import PostFixedDepositAccountsAccountIdResponse from './model/PostFixedDepositAccountsAccountIdResponse';
import PostFixedDepositAccountsRequest from './model/PostFixedDepositAccountsRequest';
import PostFixedDepositAccountsResponse from './model/PostFixedDepositAccountsResponse';
import PostFixedDepositProductsChartSlabs from './model/PostFixedDepositProductsChartSlabs';
import PostFixedDepositProductsCharts from './model/PostFixedDepositProductsCharts';
import PostFixedDepositProductsRequest from './model/PostFixedDepositProductsRequest';
import PostFixedDepositProductsResponse from './model/PostFixedDepositProductsResponse';
import PostFloatingRatesRatePeriods from './model/PostFloatingRatesRatePeriods';
import PostFloatingRatesRequest from './model/PostFloatingRatesRequest';
import PostFloatingRatesResponse from './model/PostFloatingRatesResponse';
import PostFundsRequest from './model/PostFundsRequest';
import PostFundsResponse from './model/PostFundsResponse';
import PostGLAccountsRequest from './model/PostGLAccountsRequest';
import PostGLAccountsResponse from './model/PostGLAccountsResponse';
import PostGlClosuresRequest from './model/PostGlClosuresRequest';
import PostGlClosuresResponse from './model/PostGlClosuresResponse';
import PostGroupsGroupIdClients from './model/PostGroupsGroupIdClients';
import PostGroupsGroupIdCommandUnassignStaffRequest from './model/PostGroupsGroupIdCommandUnassignStaffRequest';
import PostGroupsGroupIdCommandUnassignStaffResponse from './model/PostGroupsGroupIdCommandUnassignStaffResponse';
import PostGroupsGroupIdRequest from './model/PostGroupsGroupIdRequest';
import PostGroupsGroupIdResponse from './model/PostGroupsGroupIdResponse';
import PostGroupsRequest from './model/PostGroupsRequest';
import PostGroupsResponse from './model/PostGroupsResponse';
import PostHolidaysHolidayIdResponse from './model/PostHolidaysHolidayIdResponse';
import PostHolidaysRequest from './model/PostHolidaysRequest';
import PostHolidaysRequestOffices from './model/PostHolidaysRequestOffices';
import PostHolidaysResponse from './model/PostHolidaysResponse';
import PostHookRequest from './model/PostHookRequest';
import PostHookResponse from './model/PostHookResponse';
import PostInterestRateChartsChartIdChartSlabsIncentives from './model/PostInterestRateChartsChartIdChartSlabsIncentives';
import PostInterestRateChartsChartIdChartSlabsRequest from './model/PostInterestRateChartsChartIdChartSlabsRequest';
import PostInterestRateChartsChartIdChartSlabsResponse from './model/PostInterestRateChartsChartIdChartSlabsResponse';
import PostInterestRateChartsRequest from './model/PostInterestRateChartsRequest';
import PostInterestRateChartsResponse from './model/PostInterestRateChartsResponse';
import PostJournalEntriesResponse from './model/PostJournalEntriesResponse';
import PostJournalEntriesTransactionIdRequest from './model/PostJournalEntriesTransactionIdRequest';
import PostJournalEntriesTransactionIdResponse from './model/PostJournalEntriesTransactionIdResponse';
import PostLinkDelinkAccountsToFromPocketResponse from './model/PostLinkDelinkAccountsToFromPocketResponse';
import PostLoanChanges from './model/PostLoanChanges';
import PostLoanProductsRequest from './model/PostLoanProductsRequest';
import PostLoanProductsResponse from './model/PostLoanProductsResponse';
import PostLoansLoanIdChargesChargeIdRequest from './model/PostLoansLoanIdChargesChargeIdRequest';
import PostLoansLoanIdChargesChargeIdResponse from './model/PostLoansLoanIdChargesChargeIdResponse';
import PostLoansLoanIdChargesRequest from './model/PostLoansLoanIdChargesRequest';
import PostLoansLoanIdChargesResponse from './model/PostLoansLoanIdChargesResponse';
import PostLoansLoanIdCollateralsRequest from './model/PostLoansLoanIdCollateralsRequest';
import PostLoansLoanIdCollateralsResponse from './model/PostLoansLoanIdCollateralsResponse';
import PostLoansLoanIdRequest from './model/PostLoansLoanIdRequest';
import PostLoansLoanIdResponse from './model/PostLoansLoanIdResponse';
import PostLoansLoanIdScheduleResponse from './model/PostLoansLoanIdScheduleResponse';
import PostLoansLoanIdTransactionsResponse from './model/PostLoansLoanIdTransactionsResponse';
import PostLoansLoanIdTransactionsTransactionIdRequest from './model/PostLoansLoanIdTransactionsTransactionIdRequest';
import PostLoansLoanIdTransactionsTransactionIdResponse from './model/PostLoansLoanIdTransactionsTransactionIdResponse';
import PostLoansRepaymentSchedulePeriods from './model/PostLoansRepaymentSchedulePeriods';
import PostLoansRequest from './model/PostLoansRequest';
import PostLoansResponse from './model/PostLoansResponse';
import PostMakerCheckersResponse from './model/PostMakerCheckersResponse';
import PostNewShareApplicationResponse from './model/PostNewShareApplicationResponse';
import PostNewTransferResponse from './model/PostNewTransferResponse';
import PostOfficesRequest from './model/PostOfficesRequest';
import PostOfficesResponse from './model/PostOfficesResponse';
import PostPaymentTypesRequest from './model/PostPaymentTypesRequest';
import PostPaymentTypesResponse from './model/PostPaymentTypesResponse';
import PostProductsChargesSelected from './model/PostProductsChargesSelected';
import PostProductsMarketPricePeriods from './model/PostProductsMarketPricePeriods';
import PostProductsTypeRequest from './model/PostProductsTypeRequest';
import PostProductsTypeResponse from './model/PostProductsTypeResponse';
import PostProvisioningCriteriaRequest from './model/PostProvisioningCriteriaRequest';
import PostProvisioningCriteriaResponse from './model/PostProvisioningCriteriaResponse';
import PostProvisioningEntriesRequest from './model/PostProvisioningEntriesRequest';
import PostProvisioningEntriesResponse from './model/PostProvisioningEntriesResponse';
import PostRecurringChanges from './model/PostRecurringChanges';
import PostRecurringDepositAccountsAccountIdResponse from './model/PostRecurringDepositAccountsAccountIdResponse';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest from './model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse from './model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse';
import PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse from './model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse';
import PostRecurringDepositAccountsRequest from './model/PostRecurringDepositAccountsRequest';
import PostRecurringDepositAccountsResponse from './model/PostRecurringDepositAccountsResponse';
import PostRecurringDepositProductsChartSlabs from './model/PostRecurringDepositProductsChartSlabs';
import PostRecurringDepositProductsCharts from './model/PostRecurringDepositProductsCharts';
import PostRecurringDepositProductsRequest from './model/PostRecurringDepositProductsRequest';
import PostRecurringDepositProductsResponse from './model/PostRecurringDepositProductsResponse';
import PostReportMailingJobsRequest from './model/PostReportMailingJobsRequest';
import PostReportMailingJobsResponse from './model/PostReportMailingJobsResponse';
import PostReportsResponse from './model/PostReportsResponse';
import PostRepostRequest from './model/PostRepostRequest';
import PostResourceTypeResourceIdNotesRequest from './model/PostResourceTypeResourceIdNotesRequest';
import PostResourceTypeResourceIdNotesResponse from './model/PostResourceTypeResourceIdNotesResponse';
import PostRolesRequest from './model/PostRolesRequest';
import PostRolesResponse from './model/PostRolesResponse';
import PostRolesRoleIdPermissionsResponsePermissions from './model/PostRolesRoleIdPermissionsResponsePermissions';
import PostRolesRoleIdResponse from './model/PostRolesRoleIdResponse';
import PostRunaccrualsRequest from './model/PostRunaccrualsRequest';
import PostSavingsAccountsAccountIdRequest from './model/PostSavingsAccountsAccountIdRequest';
import PostSavingsAccountsAccountIdResponse from './model/PostSavingsAccountsAccountIdResponse';
import PostSavingsAccountsRequest from './model/PostSavingsAccountsRequest';
import PostSavingsAccountsResponse from './model/PostSavingsAccountsResponse';
import PostSavingsAccountsSavingsAccountIdChargesRequest from './model/PostSavingsAccountsSavingsAccountIdChargesRequest';
import PostSavingsAccountsSavingsAccountIdChargesResponse from './model/PostSavingsAccountsSavingsAccountIdChargesResponse';
import PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest from './model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest';
import PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from './model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import PostSavingsCharges from './model/PostSavingsCharges';
import PostSavingsProductsRequest from './model/PostSavingsProductsRequest';
import PostSavingsProductsResponse from './model/PostSavingsProductsResponse';
import PostSelfAuthenticationResponse from './model/PostSelfAuthenticationResponse';
import PostSelfBeneficiariesTPTRequest from './model/PostSelfBeneficiariesTPTRequest';
import PostSelfBeneficiariesTPTResponse from './model/PostSelfBeneficiariesTPTResponse';
import PostSelfLoansData from './model/PostSelfLoansData';
import PostSelfLoansDatatables from './model/PostSelfLoansDatatables';
import PostSelfLoansDisbursementData from './model/PostSelfLoansDisbursementData';
import PostSelfLoansLoanIdChanges from './model/PostSelfLoansLoanIdChanges';
import PostSelfLoansLoanIdRequest from './model/PostSelfLoansLoanIdRequest';
import PostSelfLoansLoanIdResponse from './model/PostSelfLoansLoanIdResponse';
import PostSelfLoansLoanIdStatus from './model/PostSelfLoansLoanIdStatus';
import PostSelfLoansRequest from './model/PostSelfLoansRequest';
import PostSelfLoansResponse from './model/PostSelfLoansResponse';
import PostStaffRequest from './model/PostStaffRequest';
import PostStaffResponse from './model/PostStaffResponse';
import PostStandingInstructionsRequest from './model/PostStandingInstructionsRequest';
import PostStandingInstructionsResponse from './model/PostStandingInstructionsResponse';
import PostSurveySurveyNameApptableIdRequest from './model/PostSurveySurveyNameApptableIdRequest';
import PostSurveySurveyNameApptableIdResponse from './model/PostSurveySurveyNameApptableIdResponse';
import PostTaxesComponentsRequest from './model/PostTaxesComponentsRequest';
import PostTaxesComponentsResponse from './model/PostTaxesComponentsResponse';
import PostTaxesGroupRequest from './model/PostTaxesGroupRequest';
import PostTaxesGroupResponse from './model/PostTaxesGroupResponse';
import PostTaxesGroupTaxComponents from './model/PostTaxesGroupTaxComponents';
import PostTellersRequest from './model/PostTellersRequest';
import PostTellersResponse from './model/PostTellersResponse';
import PostTellersTellerIdCashiersCashierIdAllocateRequest from './model/PostTellersTellerIdCashiersCashierIdAllocateRequest';
import PostTellersTellerIdCashiersCashierIdAllocateResponse from './model/PostTellersTellerIdCashiersCashierIdAllocateResponse';
import PostTellersTellerIdCashiersCashierIdSettleRequest from './model/PostTellersTellerIdCashiersCashierIdSettleRequest';
import PostTellersTellerIdCashiersCashierIdSettleResponse from './model/PostTellersTellerIdCashiersCashierIdSettleResponse';
import PostTellersTellerIdCashiersRequest from './model/PostTellersTellerIdCashiersRequest';
import PostTellersTellerIdCashiersResponse from './model/PostTellersTellerIdCashiersResponse';
import PostTemplatesRequest from './model/PostTemplatesRequest';
import PostTemplatesResponse from './model/PostTemplatesResponse';
import PostUsersRequest from './model/PostUsersRequest';
import PostUsersResponse from './model/PostUsersResponse';
import PostalAddress from './model/PostalAddress';
import ProcessingResultLookup from './model/ProcessingResultLookup';
import ProvisioningCriteriaDefinitionData from './model/ProvisioningCriteriaDefinitionData';
import ProvisioningEntryData from './model/ProvisioningEntryData';
import PutAccountNumberFormatsRequest from './model/PutAccountNumberFormatsRequest';
import PutAccountNumberFormatsResponse from './model/PutAccountNumberFormatsResponse';
import PutAccountNumberFormatschangesSwagger from './model/PutAccountNumberFormatschangesSwagger';
import PutAccountingRulesRequest from './model/PutAccountingRulesRequest';
import PutAccountingRulesResponse from './model/PutAccountingRulesResponse';
import PutAccountingRulesResponsechangesSwagger from './model/PutAccountingRulesResponsechangesSwagger';
import PutAccountsChanges from './model/PutAccountsChanges';
import PutAccountsTypeAccountIdRequest from './model/PutAccountsTypeAccountIdRequest';
import PutAccountsTypeAccountIdResponse from './model/PutAccountsTypeAccountIdResponse';
import PutCachechangesSwagger from './model/PutCachechangesSwagger';
import PutCachesRequest from './model/PutCachesRequest';
import PutCachesResponse from './model/PutCachesResponse';
import PutCentersCenterIdRequest from './model/PutCentersCenterIdRequest';
import PutCentersCenterIdResponse from './model/PutCentersCenterIdResponse';
import PutCentersChanges from './model/PutCentersChanges';
import PutChargesChargeIdRequest from './model/PutChargesChargeIdRequest';
import PutChargesChargeIdResponse from './model/PutChargesChargeIdResponse';
import PutClientClientIdAddressesRequest from './model/PutClientClientIdAddressesRequest';
import PutClientClientIdAddressesResponse from './model/PutClientClientIdAddressesResponse';
import PutClientsClientIdIdentifiersIdentifierIdRequest from './model/PutClientsClientIdIdentifiersIdentifierIdRequest';
import PutClientsClientIdIdentifiersIdentifierIdResponse from './model/PutClientsClientIdIdentifiersIdentifierIdResponse';
import PutClientsClientIdRequest from './model/PutClientsClientIdRequest';
import PutClientsClientIdResponse from './model/PutClientsClientIdResponse';
import PutCodeValueDataResponse from './model/PutCodeValueDataResponse';
import PutCodeValuechangesSwagger from './model/PutCodeValuechangesSwagger';
import PutCodeValuesDataRequest from './model/PutCodeValuesDataRequest';
import PutCodesApichangesSwagger from './model/PutCodesApichangesSwagger';
import PutCodesRequest from './model/PutCodesRequest';
import PutCodesResponse from './model/PutCodesResponse';
import PutCurrenciesRequest from './model/PutCurrenciesRequest';
import PutCurrenciesResponse from './model/PutCurrenciesResponse';
import PutDataTablesAppTableIdDatatableIdRequest from './model/PutDataTablesAppTableIdDatatableIdRequest';
import PutDataTablesAppTableIdDatatableIdResponse from './model/PutDataTablesAppTableIdDatatableIdResponse';
import PutDataTablesAppTableIdRequest from './model/PutDataTablesAppTableIdRequest';
import PutDataTablesAppTableIdResponse from './model/PutDataTablesAppTableIdResponse';
import PutDataTablesAppTableIdResponseChanges from './model/PutDataTablesAppTableIdResponseChanges';
import PutDataTablesRequest from './model/PutDataTablesRequest';
import PutDataTablesRequestAddColumns from './model/PutDataTablesRequestAddColumns';
import PutDataTablesRequestChangeColumns from './model/PutDataTablesRequestChangeColumns';
import PutDataTablesRequestDropColumns from './model/PutDataTablesRequestDropColumns';
import PutDataTablesResponse from './model/PutDataTablesResponse';
import PutEntityTypeEntityIdDocumentsResponse from './model/PutEntityTypeEntityIdDocumentsResponse';
import PutExternalServiceRequest from './model/PutExternalServiceRequest';
import PutFinancialActivityAccountsResponse from './model/PutFinancialActivityAccountsResponse';
import PutFinancialActivityAccountscommentsSwagger from './model/PutFinancialActivityAccountscommentsSwagger';
import PutFixedDepositAccountsAccountIdRequest from './model/PutFixedDepositAccountsAccountIdRequest';
import PutFixedDepositAccountsAccountIdResponse from './model/PutFixedDepositAccountsAccountIdResponse';
import PutFixedDepositAccountsChanges from './model/PutFixedDepositAccountsChanges';
import PutFixedDepositProductsChanges from './model/PutFixedDepositProductsChanges';
import PutFixedDepositProductsProductIdRequest from './model/PutFixedDepositProductsProductIdRequest';
import PutFixedDepositProductsProductIdResponse from './model/PutFixedDepositProductsProductIdResponse';
import PutFloatingRatesChanges from './model/PutFloatingRatesChanges';
import PutFloatingRatesFloatingRateIdRequest from './model/PutFloatingRatesFloatingRateIdRequest';
import PutFloatingRatesFloatingRateIdResponse from './model/PutFloatingRatesFloatingRateIdResponse';
import PutFundsFundIdRequest from './model/PutFundsFundIdRequest';
import PutFundsFundIdResponse from './model/PutFundsFundIdResponse';
import PutGLAccountsRequest from './model/PutGLAccountsRequest';
import PutGLAccountsResponse from './model/PutGLAccountsResponse';
import PutGLAccountsResponsechangesSwagger from './model/PutGLAccountsResponsechangesSwagger';
import PutGlClosuresRequest from './model/PutGlClosuresRequest';
import PutGlClosuresResponse from './model/PutGlClosuresResponse';
import PutGlobalConfigurationsRequest from './model/PutGlobalConfigurationsRequest';
import PutGlobalConfigurationsResponse from './model/PutGlobalConfigurationsResponse';
import PutGlobalConfigurationsResponsechangesSwagger from './model/PutGlobalConfigurationsResponsechangesSwagger';
import PutGroupsGroupIdChanges from './model/PutGroupsGroupIdChanges';
import PutGroupsGroupIdRequest from './model/PutGroupsGroupIdRequest';
import PutGroupsGroupIdResponse from './model/PutGroupsGroupIdResponse';
import PutHolidaysHolidayIdRequest from './model/PutHolidaysHolidayIdRequest';
import PutHolidaysHolidayIdResponse from './model/PutHolidaysHolidayIdResponse';
import PutHolidaysHolidayIdResponseChanges from './model/PutHolidaysHolidayIdResponseChanges';
import PutHookRequest from './model/PutHookRequest';
import PutHookResponse from './model/PutHookResponse';
import PutHookResponseChangesSwagger from './model/PutHookResponseChangesSwagger';
import PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest from './model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest';
import PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse from './model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse';
import PutInterestRateChartsChartIdRequest from './model/PutInterestRateChartsChartIdRequest';
import PutInterestRateChartsChartIdResponse from './model/PutInterestRateChartsChartIdResponse';
import PutJobsJobIDRequest from './model/PutJobsJobIDRequest';
import PutLoanChanges from './model/PutLoanChanges';
import PutLoanProductsProductIdRequest from './model/PutLoanProductsProductIdRequest';
import PutLoanProductsProductIdResponse from './model/PutLoanProductsProductIdResponse';
import PutLoansLoanIdChanges from './model/PutLoansLoanIdChanges';
import PutLoansLoanIdChargesChargeIdRequest from './model/PutLoansLoanIdChargesChargeIdRequest';
import PutLoansLoanIdChargesChargeIdResponse from './model/PutLoansLoanIdChargesChargeIdResponse';
import PutLoansLoanIdCollateralsCollateralIdResponse from './model/PutLoansLoanIdCollateralsCollateralIdResponse';
import PutLoansLoanIdRequest from './model/PutLoansLoanIdRequest';
import PutLoansLoanIdResponse from './model/PutLoansLoanIdResponse';
import PutLoansLoandIdCollateralsCollateralIdRequest from './model/PutLoansLoandIdCollateralsCollateralIdRequest';
import PutNotesChanges from './model/PutNotesChanges';
import PutOfficesOfficeIdRequest from './model/PutOfficesOfficeIdRequest';
import PutOfficesOfficeIdResponse from './model/PutOfficesOfficeIdResponse';
import PutOfficesOfficeIdResponseChanges from './model/PutOfficesOfficeIdResponseChanges';
import PutPasswordPreferencesTemplateRequest from './model/PutPasswordPreferencesTemplateRequest';
import PutPaymentTypesPaymentTypeIdRequest from './model/PutPaymentTypesPaymentTypeIdRequest';
import PutPaymentTypesPaymentTypeIdResponse from './model/PutPaymentTypesPaymentTypeIdResponse';
import PutPermissionsRequest from './model/PutPermissionsRequest';
import PutProductsChanges from './model/PutProductsChanges';
import PutProductsTypeProductIdRequest from './model/PutProductsTypeProductIdRequest';
import PutProductsTypeProductIdResponse from './model/PutProductsTypeProductIdResponse';
import PutProvisioningCriteriaRequest from './model/PutProvisioningCriteriaRequest';
import PutProvisioningCriteriaResponse from './model/PutProvisioningCriteriaResponse';
import PutProvisioningCriteriaResponseChanges from './model/PutProvisioningCriteriaResponseChanges';
import PutProvisioningEntriesRequest from './model/PutProvisioningEntriesRequest';
import PutProvisioningEntriesResponse from './model/PutProvisioningEntriesResponse';
import PutRecurringDepositAccountsAccountIdRequest from './model/PutRecurringDepositAccountsAccountIdRequest';
import PutRecurringDepositAccountsAccountIdResponse from './model/PutRecurringDepositAccountsAccountIdResponse';
import PutRecurringDepositAccountsChanges from './model/PutRecurringDepositAccountsChanges';
import PutRecurringDepositProductsChanges from './model/PutRecurringDepositProductsChanges';
import PutRecurringDepositProductsRequest from './model/PutRecurringDepositProductsRequest';
import PutRecurringDepositProductsResponse from './model/PutRecurringDepositProductsResponse';
import PutReportMailingJobsRequest from './model/PutReportMailingJobsRequest';
import PutReportMailingJobsResponse from './model/PutReportMailingJobsResponse';
import PutReportMailingJobsResponseChanges from './model/PutReportMailingJobsResponseChanges';
import PutReportRequest from './model/PutReportRequest';
import PutReportResponse from './model/PutReportResponse';
import PutReportResponseChanges from './model/PutReportResponseChanges';
import PutResourceTypeResourceIdNotesNoteIdRequest from './model/PutResourceTypeResourceIdNotesNoteIdRequest';
import PutResourceTypeResourceIdNotesNoteIdResponse from './model/PutResourceTypeResourceIdNotesNoteIdResponse';
import PutRolesRoleIdPermissionsRequest from './model/PutRolesRoleIdPermissionsRequest';
import PutRolesRoleIdPermissionsResponse from './model/PutRolesRoleIdPermissionsResponse';
import PutRolesRoleIdRequest from './model/PutRolesRoleIdRequest';
import PutRolesRoleIdResponse from './model/PutRolesRoleIdResponse';
import PutRolesRoleIdResponseChanges from './model/PutRolesRoleIdResponseChanges';
import PutSavingsAccountsAccountIdRequest from './model/PutSavingsAccountsAccountIdRequest';
import PutSavingsAccountsAccountIdResponse from './model/PutSavingsAccountsAccountIdResponse';
import PutSavingsAccountsChanges from './model/PutSavingsAccountsChanges';
import PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest from './model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest';
import PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse from './model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse';
import PutSavingsChanges from './model/PutSavingsChanges';
import PutSavingsProductsProductIdRequest from './model/PutSavingsProductsProductIdRequest';
import PutSavingsProductsProductIdResponse from './model/PutSavingsProductsProductIdResponse';
import PutSelfBeneficiariesChanges from './model/PutSelfBeneficiariesChanges';
import PutSelfBeneficiariesTPTBeneficiaryIdRequest from './model/PutSelfBeneficiariesTPTBeneficiaryIdRequest';
import PutSelfBeneficiariesTPTBeneficiaryIdResponse from './model/PutSelfBeneficiariesTPTBeneficiaryIdResponse';
import PutSelfLoansChanges from './model/PutSelfLoansChanges';
import PutSelfLoansLoanIdRequest from './model/PutSelfLoansLoanIdRequest';
import PutSelfLoansLoanIdResponse from './model/PutSelfLoansLoanIdResponse';
import PutSelfUserChanges from './model/PutSelfUserChanges';
import PutSelfUserRequest from './model/PutSelfUserRequest';
import PutSelfUserResponse from './model/PutSelfUserResponse';
import PutStaffRequest from './model/PutStaffRequest';
import PutStaffResponse from './model/PutStaffResponse';
import PutStandingInstructionsStandingInstructionIdRequest from './model/PutStandingInstructionsStandingInstructionIdRequest';
import PutStandingInstructionsStandingInstructionIdResponse from './model/PutStandingInstructionsStandingInstructionIdResponse';
import PutTaxesComponentsChanges from './model/PutTaxesComponentsChanges';
import PutTaxesComponentsTaxComponentIdRequest from './model/PutTaxesComponentsTaxComponentIdRequest';
import PutTaxesComponentsTaxComponentIdResponse from './model/PutTaxesComponentsTaxComponentIdResponse';
import PutTaxesGroupChanges from './model/PutTaxesGroupChanges';
import PutTaxesGroupModifiedComponents from './model/PutTaxesGroupModifiedComponents';
import PutTaxesGroupTaxComponents from './model/PutTaxesGroupTaxComponents';
import PutTaxesGroupTaxGroupIdRequest from './model/PutTaxesGroupTaxGroupIdRequest';
import PutTaxesGroupTaxGroupIdResponse from './model/PutTaxesGroupTaxGroupIdResponse';
import PutTellersRequest from './model/PutTellersRequest';
import PutTellersResponse from './model/PutTellersResponse';
import PutTellersResponseChanges from './model/PutTellersResponseChanges';
import PutTellersTellerIdCashiersCashierIdRequest from './model/PutTellersTellerIdCashiersCashierIdRequest';
import PutTellersTellerIdCashiersCashierIdResponse from './model/PutTellersTellerIdCashiersCashierIdResponse';
import PutTellersTellerIdCashiersCashierIdResponseChanges from './model/PutTellersTellerIdCashiersCashierIdResponseChanges';
import PutTemplatesTemplateIdRequest from './model/PutTemplatesTemplateIdRequest';
import PutTemplatesTemplateIdResponse from './model/PutTemplatesTemplateIdResponse';
import PutUpdateStandingInstructionChanges from './model/PutUpdateStandingInstructionChanges';
import PutUsersUserIdRequest from './model/PutUsersUserIdRequest';
import PutUsersUserIdResponse from './model/PutUsersUserIdResponse';
import PutUsersUserIdResponseChanges from './model/PutUsersUserIdResponseChanges';
import PutWorkingDaysRequest from './model/PutWorkingDaysRequest';
import PutWorkingDaysResponse from './model/PutWorkingDaysResponse';
import Question from './model/Question';
import QuestionData from './model/QuestionData';
import Rate from './model/Rate';
import ReportMailingJobRunHistoryData from './model/ReportMailingJobRunHistoryData';
import Response from './model/Response';
import ResponseData from './model/ResponseData';
import ResultsetColumnHeaderData from './model/ResultsetColumnHeaderData';
import ResultsetRowData from './model/ResultsetRowData';
import Role from './model/Role';
import RoleData from './model/RoleData';
import SavingsProductData from './model/SavingsProductData';
import Scorecard from './model/Scorecard';
import ScorecardData from './model/ScorecardData';
import ScorecardValue from './model/ScorecardValue';
import SingleDebitOrCreditEntryCommand from './model/SingleDebitOrCreditEntryCommand';
import SmsCampaignData from './model/SmsCampaignData';
import Staff from './model/Staff';
import StaffData from './model/StaffData';
import SubjectName from './model/SubjectName';
import Survey from './model/Survey';
import SurveyData from './model/SurveyData';
import TaxComponent from './model/TaxComponent';
import TaxComponentHistory from './model/TaxComponentHistory';
import TaxGroup from './model/TaxGroup';
import TaxGroupMappings from './model/TaxGroupMappings';
import TemplateMapper from './model/TemplateMapper';
import AccountNumberFormatApi from './api/AccountNumberFormatApi';
import AccountTransfersApi from './api/AccountTransfersApi';
import AccountingClosureApi from './api/AccountingClosureApi';
import AccountingRulesApi from './api/AccountingRulesApi';
import AdhocQueryApiApi from './api/AdhocQueryApiApi';
import AuditsApi from './api/AuditsApi';
import AuthenticationHTTPBasicApi from './api/AuthenticationHTTPBasicApi';
import BatchAPIApi from './api/BatchAPIApi';
import CacheApi from './api/CacheApi';
import CashierJournalsApi from './api/CashierJournalsApi';
import CashiersApi from './api/CashiersApi';
import CentersApi from './api/CentersApi';
import ChargesApi from './api/ChargesApi';
import ClientApi from './api/ClientApi';
import ClientChargesApi from './api/ClientChargesApi';
import ClientIdentifierApi from './api/ClientIdentifierApi';
import ClientTransactionApi from './api/ClientTransactionApi';
import ClientsAddressApi from './api/ClientsAddressApi';
import CodeValuesApi from './api/CodeValuesApi';
import CodesApi from './api/CodesApi';
import CurrencyApi from './api/CurrencyApi';
import DataTablesApi from './api/DataTablesApi';
import DefaultApi from './api/DefaultApi';
import DocumentsApi from './api/DocumentsApi';
import EntityDataTableApi from './api/EntityDataTableApi';
import EntityFieldConfigurationApi from './api/EntityFieldConfigurationApi';
import ExternalServicesApi from './api/ExternalServicesApi';
import FetchAuthenticatedUserDetailsApi from './api/FetchAuthenticatedUserDetailsApi';
import FixedDepositAccountApi from './api/FixedDepositAccountApi';
import FixedDepositProductApi from './api/FixedDepositProductApi';
import FloatingRatesApi from './api/FloatingRatesApi';
import GeneralLedgerAccountApi from './api/GeneralLedgerAccountApi';
import GlobalConfigurationApi from './api/GlobalConfigurationApi';
import GroupsApi from './api/GroupsApi';
import HolidaysApi from './api/HolidaysApi';
import HooksApi from './api/HooksApi';
import InterestRateChartApi from './api/InterestRateChartApi';
import InterestRateSlabAKAInterestBandsApi from './api/InterestRateSlabAKAInterestBandsApi';
import JournalEntriesApi from './api/JournalEntriesApi';
import ListReportMailingJobHistoryApi from './api/ListReportMailingJobHistoryApi';
import LoanChargesApi from './api/LoanChargesApi';
import LoanCollateralApi from './api/LoanCollateralApi';
import LoanProductsApi from './api/LoanProductsApi';
import LoanReschedulingApi from './api/LoanReschedulingApi';
import LoanTransactionsApi from './api/LoanTransactionsApi';
import LoansApi from './api/LoansApi';
import MIFOSXBATCHJOBSApi from './api/MIFOSXBATCHJOBSApi';
import MakerCheckerOr4EyeFunctionalityApi from './api/MakerCheckerOr4EyeFunctionalityApi';
import MappingFinancialActivitiesToAccountsApi from './api/MappingFinancialActivitiesToAccountsApi';
import MixMappingApi from './api/MixMappingApi';
import MixReportApi from './api/MixReportApi';
import MixTaxonomyApi from './api/MixTaxonomyApi';
import NotesApi from './api/NotesApi';
import NotificationApi from './api/NotificationApi';
import OfficesApi from './api/OfficesApi';
import PasswordPreferencesApi from './api/PasswordPreferencesApi';
import PaymentTypeApi from './api/PaymentTypeApi';
import PeriodicAccrualAccountingApi from './api/PeriodicAccrualAccountingApi';
import PermissionsApi from './api/PermissionsApi';
import PocketApi from './api/PocketApi';
import ProvisioningCategoryApi from './api/ProvisioningCategoryApi';
import ProvisioningCriteriaApi from './api/ProvisioningCriteriaApi';
import ProvisioningEntriesApi from './api/ProvisioningEntriesApi';
import RecurringDepositAccountApi from './api/RecurringDepositAccountApi';
import RecurringDepositAccountTransactionsApi from './api/RecurringDepositAccountTransactionsApi';
import RecurringDepositProductApi from './api/RecurringDepositProductApi';
import ReportMailingJobsApi from './api/ReportMailingJobsApi';
import ReportsApi from './api/ReportsApi';
import RolesApi from './api/RolesApi';
import RunReportsApi from './api/RunReportsApi';
import SPMAPILookUpTableApi from './api/SPMAPILookUpTableApi';
import SavingsAccountApi from './api/SavingsAccountApi';
import SavingsChargesApi from './api/SavingsChargesApi';
import SavingsProductApi from './api/SavingsProductApi';
import SchedulerApi from './api/SchedulerApi';
import ScoreCardApi from './api/ScoreCardApi';
import SearchAPIApi from './api/SearchAPIApi';
import SelfAccountTransferApi from './api/SelfAccountTransferApi';
import SelfAuthenticationApi from './api/SelfAuthenticationApi';
import SelfClientApi from './api/SelfClientApi';
import SelfDividendApi from './api/SelfDividendApi';
import SelfLoanProductsApi from './api/SelfLoanProductsApi';
import SelfLoansApi from './api/SelfLoansApi';
import SelfRunReportApi from './api/SelfRunReportApi';
import SelfSavingsAccountApi from './api/SelfSavingsAccountApi';
import SelfScoreCardApi from './api/SelfScoreCardApi';
import SelfServiceRegistrationApi from './api/SelfServiceRegistrationApi';
import SelfShareAccountsApi from './api/SelfShareAccountsApi';
import SelfSpmApi from './api/SelfSpmApi';
import SelfThirdPartyTransferApi from './api/SelfThirdPartyTransferApi';
import SelfUserApi from './api/SelfUserApi';
import SelfUserDetailsApi from './api/SelfUserDetailsApi';
import ShareAccountApi from './api/ShareAccountApi';
import SpmSurveysApi from './api/SpmSurveysApi';
import StaffApi from './api/StaffApi';
import StandingInstructionsApi from './api/StandingInstructionsApi';
import StandingInstructionsHistoryApi from './api/StandingInstructionsHistoryApi';
import TaxComponentsApi from './api/TaxComponentsApi';
import TaxGroupApi from './api/TaxGroupApi';
import TellerCashManagementApi from './api/TellerCashManagementApi';
import UserGeneratedDocumentsApi from './api/UserGeneratedDocumentsApi';
import UsersApi from './api/UsersApi';
import WorkingDaysApi from './api/WorkingDaysApi';


/**
* Apache_Fineract_is_a_secure_multi_tenanted_microfinance_platformThe_goal_of_the_Apache_Fineract_API_is_to_empower_developers_to_build_apps_on_top_of_the_Apache_Fineract_PlatformbrThe__reference_app_https__cui_fineract_dev__username_mifos_password_password_works_on_the_same_demo_tenant_as_the_interactive_links_in_this_documentation__The_API_is_organized_around__REST_https__en_wikipedia_org_wiki_Representational_state_transfer__Find_out_more_about_Apache_Fineract__here__fineract_provider_api_docs_apiLive_htmtop__You_can__Try_The_API_From_Your_Browser__fineract_provider_api_docs_apiLive_htminteract__The_Generic_Options_are_available__here__fineract_provider_api_docs_apiLive_htmgenopts__Find_out_more_about__Updating_Dates_and_Numbers__fineract_provider_api_docs_apiLive_htmdates_and_numbers__For_the_Authentication_and_the_Basic_of_HTTP_and_HTTPS_refer__here__fineract_provider_api_docs_apiLive_htmauthentication_overview__Check_about_ERROR_codes__here__fineract_provider_api_docs_apiLive_htmerrorsPlease_refer_to_the__old_documentation__fineract_provider_api_docs_apiLive_htm_for_any_documentation_queries.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ApacheFineract = require('index'); // See note below*.
* var xxxSvc = new ApacheFineract.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ApacheFineract.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ApacheFineract.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ApacheFineract.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountingRuleData model constructor.
     * @property {module:model/AccountingRuleData}
     */
    AccountingRuleData,

    /**
     * The AccountingTagRuleData model constructor.
     * @property {module:model/AccountingTagRuleData}
     */
    AccountingTagRuleData,

    /**
     * The AppUser model constructor.
     * @property {module:model/AppUser}
     */
    AppUser,

    /**
     * The AppUserClientMapping model constructor.
     * @property {module:model/AppUserClientMapping}
     */
    AppUserClientMapping,

    /**
     * The AppUserData model constructor.
     * @property {module:model/AppUserData}
     */
    AppUserData,

    /**
     * The BatchResponse model constructor.
     * @property {module:model/BatchResponse}
     */
    BatchResponse,

    /**
     * The BodyPart model constructor.
     * @property {module:model/BodyPart}
     */
    BodyPart,

    /**
     * The BodyPartMediaType model constructor.
     * @property {module:model/BodyPartMediaType}
     */
    BodyPartMediaType,

    /**
     * The CashierData model constructor.
     * @property {module:model/CashierData}
     */
    CashierData,

    /**
     * The CashierTransactionData model constructor.
     * @property {module:model/CashierTransactionData}
     */
    CashierTransactionData,

    /**
     * The CashierTxnType model constructor.
     * @property {module:model/CashierTxnType}
     */
    CashierTxnType,

    /**
     * The Charge model constructor.
     * @property {module:model/Charge}
     */
    Charge,

    /**
     * The ChargeData model constructor.
     * @property {module:model/ChargeData}
     */
    ChargeData,

    /**
     * The ChargeFeeOnMonthDay model constructor.
     * @property {module:model/ChargeFeeOnMonthDay}
     */
    ChargeFeeOnMonthDay,

    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client,

    /**
     * The ClientData model constructor.
     * @property {module:model/ClientData}
     */
    ClientData,

    /**
     * The CodeValueData model constructor.
     * @property {module:model/CodeValueData}
     */
    CodeValueData,

    /**
     * The CommandProcessingResult model constructor.
     * @property {module:model/CommandProcessingResult}
     */
    CommandProcessingResult,

    /**
     * The CommandWrapper model constructor.
     * @property {module:model/CommandWrapper}
     */
    CommandWrapper,

    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component,

    /**
     * The ComponentData model constructor.
     * @property {module:model/ComponentData}
     */
    ComponentData,

    /**
     * The ContentDisposition model constructor.
     * @property {module:model/ContentDisposition}
     */
    ContentDisposition,

    /**
     * The CurrencyData model constructor.
     * @property {module:model/CurrencyData}
     */
    CurrencyData,

    /**
     * The DeleteAccountNumberFormatsResponse model constructor.
     * @property {module:model/DeleteAccountNumberFormatsResponse}
     */
    DeleteAccountNumberFormatsResponse,

    /**
     * The DeleteAccountingRulesResponse model constructor.
     * @property {module:model/DeleteAccountingRulesResponse}
     */
    DeleteAccountingRulesResponse,

    /**
     * The DeleteCentersCenterIdResponse model constructor.
     * @property {module:model/DeleteCentersCenterIdResponse}
     */
    DeleteCentersCenterIdResponse,

    /**
     * The DeleteChargesChargeIdResponse model constructor.
     * @property {module:model/DeleteChargesChargeIdResponse}
     */
    DeleteChargesChargeIdResponse,

    /**
     * The DeleteClientsClientIdChargesChargeIdResponse model constructor.
     * @property {module:model/DeleteClientsClientIdChargesChargeIdResponse}
     */
    DeleteClientsClientIdChargesChargeIdResponse,

    /**
     * The DeleteClientsClientIdIdentifiersIdentifierIdResponse model constructor.
     * @property {module:model/DeleteClientsClientIdIdentifiersIdentifierIdResponse}
     */
    DeleteClientsClientIdIdentifiersIdentifierIdResponse,

    /**
     * The DeleteClientsClientIdResponse model constructor.
     * @property {module:model/DeleteClientsClientIdResponse}
     */
    DeleteClientsClientIdResponse,

    /**
     * The DeleteCodeValueDataResponse model constructor.
     * @property {module:model/DeleteCodeValueDataResponse}
     */
    DeleteCodeValueDataResponse,

    /**
     * The DeleteCodesResponse model constructor.
     * @property {module:model/DeleteCodesResponse}
     */
    DeleteCodesResponse,

    /**
     * The DeleteDataTablesDatatableAppTableIdDatatableIdResponse model constructor.
     * @property {module:model/DeleteDataTablesDatatableAppTableIdDatatableIdResponse}
     */
    DeleteDataTablesDatatableAppTableIdDatatableIdResponse,

    /**
     * The DeleteDataTablesDatatableAppTableIdResponse model constructor.
     * @property {module:model/DeleteDataTablesDatatableAppTableIdResponse}
     */
    DeleteDataTablesDatatableAppTableIdResponse,

    /**
     * The DeleteDataTablesResponse model constructor.
     * @property {module:model/DeleteDataTablesResponse}
     */
    DeleteDataTablesResponse,

    /**
     * The DeleteEntityDatatableChecksTemplateResponse model constructor.
     * @property {module:model/DeleteEntityDatatableChecksTemplateResponse}
     */
    DeleteEntityDatatableChecksTemplateResponse,

    /**
     * The DeleteEntityTypeEntityIdDocumentsResponse model constructor.
     * @property {module:model/DeleteEntityTypeEntityIdDocumentsResponse}
     */
    DeleteEntityTypeEntityIdDocumentsResponse,

    /**
     * The DeleteFinancialActivityAccountsResponse model constructor.
     * @property {module:model/DeleteFinancialActivityAccountsResponse}
     */
    DeleteFinancialActivityAccountsResponse,

    /**
     * The DeleteFixedDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/DeleteFixedDepositAccountsAccountIdResponse}
     */
    DeleteFixedDepositAccountsAccountIdResponse,

    /**
     * The DeleteFixedDepositProductsProductIdResponse model constructor.
     * @property {module:model/DeleteFixedDepositProductsProductIdResponse}
     */
    DeleteFixedDepositProductsProductIdResponse,

    /**
     * The DeleteGLAccountsRequest model constructor.
     * @property {module:model/DeleteGLAccountsRequest}
     */
    DeleteGLAccountsRequest,

    /**
     * The DeleteGlClosuresResponse model constructor.
     * @property {module:model/DeleteGlClosuresResponse}
     */
    DeleteGlClosuresResponse,

    /**
     * The DeleteGroupsGroupIdResponse model constructor.
     * @property {module:model/DeleteGroupsGroupIdResponse}
     */
    DeleteGroupsGroupIdResponse,

    /**
     * The DeleteHolidaysHolidayIdResponse model constructor.
     * @property {module:model/DeleteHolidaysHolidayIdResponse}
     */
    DeleteHolidaysHolidayIdResponse,

    /**
     * The DeleteHookResponse model constructor.
     * @property {module:model/DeleteHookResponse}
     */
    DeleteHookResponse,

    /**
     * The DeleteInterestRateChartsChartIdChartSlabsResponse model constructor.
     * @property {module:model/DeleteInterestRateChartsChartIdChartSlabsResponse}
     */
    DeleteInterestRateChartsChartIdChartSlabsResponse,

    /**
     * The DeleteInterestRateChartsChartIdResponse model constructor.
     * @property {module:model/DeleteInterestRateChartsChartIdResponse}
     */
    DeleteInterestRateChartsChartIdResponse,

    /**
     * The DeleteLoansLoanIdChargesChargeIdResponse model constructor.
     * @property {module:model/DeleteLoansLoanIdChargesChargeIdResponse}
     */
    DeleteLoansLoanIdChargesChargeIdResponse,

    /**
     * The DeleteLoansLoanIdCollateralsCollateralIdResponse model constructor.
     * @property {module:model/DeleteLoansLoanIdCollateralsCollateralIdResponse}
     */
    DeleteLoansLoanIdCollateralsCollateralIdResponse,

    /**
     * The DeleteLoansLoanIdResponse model constructor.
     * @property {module:model/DeleteLoansLoanIdResponse}
     */
    DeleteLoansLoanIdResponse,

    /**
     * The DeletePaymentTypesPaymentTypeIdResponse model constructor.
     * @property {module:model/DeletePaymentTypesPaymentTypeIdResponse}
     */
    DeletePaymentTypesPaymentTypeIdResponse,

    /**
     * The DeleteProvisioningCriteriaResponse model constructor.
     * @property {module:model/DeleteProvisioningCriteriaResponse}
     */
    DeleteProvisioningCriteriaResponse,

    /**
     * The DeleteRecurringDepositAccountsResponse model constructor.
     * @property {module:model/DeleteRecurringDepositAccountsResponse}
     */
    DeleteRecurringDepositAccountsResponse,

    /**
     * The DeleteRecurringDepositProductsProductIdResponse model constructor.
     * @property {module:model/DeleteRecurringDepositProductsProductIdResponse}
     */
    DeleteRecurringDepositProductsProductIdResponse,

    /**
     * The DeleteReportMailingJobsResponse model constructor.
     * @property {module:model/DeleteReportMailingJobsResponse}
     */
    DeleteReportMailingJobsResponse,

    /**
     * The DeleteReportsResponse model constructor.
     * @property {module:model/DeleteReportsResponse}
     */
    DeleteReportsResponse,

    /**
     * The DeleteResourceTypeResourceIdNotesNoteIdResponse model constructor.
     * @property {module:model/DeleteResourceTypeResourceIdNotesNoteIdResponse}
     */
    DeleteResourceTypeResourceIdNotesNoteIdResponse,

    /**
     * The DeleteRolesRoleIdResponse model constructor.
     * @property {module:model/DeleteRolesRoleIdResponse}
     */
    DeleteRolesRoleIdResponse,

    /**
     * The DeleteSavingsAccountsAccountIdResponse model constructor.
     * @property {module:model/DeleteSavingsAccountsAccountIdResponse}
     */
    DeleteSavingsAccountsAccountIdResponse,

    /**
     * The DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model constructor.
     * @property {module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse,

    /**
     * The DeleteSavingsProductsProductIdResponse model constructor.
     * @property {module:model/DeleteSavingsProductsProductIdResponse}
     */
    DeleteSavingsProductsProductIdResponse,

    /**
     * The DeleteSelfBeneficiariesTPTBeneficiaryIdResponse model constructor.
     * @property {module:model/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse}
     */
    DeleteSelfBeneficiariesTPTBeneficiaryIdResponse,

    /**
     * The DeleteTellersTellerIdCashiersCashierIdResponse model constructor.
     * @property {module:model/DeleteTellersTellerIdCashiersCashierIdResponse}
     */
    DeleteTellersTellerIdCashiersCashierIdResponse,

    /**
     * The DeleteTemplatesTemplateIdResponse model constructor.
     * @property {module:model/DeleteTemplatesTemplateIdResponse}
     */
    DeleteTemplatesTemplateIdResponse,

    /**
     * The DeleteUsersUserIdResponse model constructor.
     * @property {module:model/DeleteUsersUserIdResponse}
     */
    DeleteUsersUserIdResponse,

    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity,

    /**
     * The EnumOptionData model constructor.
     * @property {module:model/EnumOptionData}
     */
    EnumOptionData,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The ExtensionData model constructor.
     * @property {module:model/ExtensionData}
     */
    ExtensionData,

    /**
     * The ExternalServicesPropertiesData model constructor.
     * @property {module:model/ExternalServicesPropertiesData}
     */
    ExternalServicesPropertiesData,

    /**
     * The Field model constructor.
     * @property {module:model/Field}
     */
    Field,

    /**
     * The FinancialActivityData model constructor.
     * @property {module:model/FinancialActivityData}
     */
    FinancialActivityData,

    /**
     * The FloatingRate model constructor.
     * @property {module:model/FloatingRate}
     */
    FloatingRate,

    /**
     * The FloatingRatePeriod model constructor.
     * @property {module:model/FloatingRatePeriod}
     */
    FloatingRatePeriod,

    /**
     * The FormDataBodyPart model constructor.
     * @property {module:model/FormDataBodyPart}
     */
    FormDataBodyPart,

    /**
     * The FormDataContentDisposition model constructor.
     * @property {module:model/FormDataContentDisposition}
     */
    FormDataContentDisposition,

    /**
     * The FundData model constructor.
     * @property {module:model/FundData}
     */
    FundData,

    /**
     * The GLAccount model constructor.
     * @property {module:model/GLAccount}
     */
    GLAccount,

    /**
     * The GLAccountData model constructor.
     * @property {module:model/GLAccountData}
     */
    GLAccountData,

    /**
     * The GeoCodeData model constructor.
     * @property {module:model/GeoCodeData}
     */
    GeoCodeData,

    /**
     * The GetAccountNumberFormatsIdResponse model constructor.
     * @property {module:model/GetAccountNumberFormatsIdResponse}
     */
    GetAccountNumberFormatsIdResponse,

    /**
     * The GetAccountNumberFormatsResponseTemplate model constructor.
     * @property {module:model/GetAccountNumberFormatsResponseTemplate}
     */
    GetAccountNumberFormatsResponseTemplate,

    /**
     * The GetAccountOptions model constructor.
     * @property {module:model/GetAccountOptions}
     */
    GetAccountOptions,

    /**
     * The GetAccountRulesResponse model constructor.
     * @property {module:model/GetAccountRulesResponse}
     */
    GetAccountRulesResponse,

    /**
     * The GetAccountRulesTemplateResponse model constructor.
     * @property {module:model/GetAccountRulesTemplateResponse}
     */
    GetAccountRulesTemplateResponse,

    /**
     * The GetAccountTransferTemplateResponse model constructor.
     * @property {module:model/GetAccountTransferTemplateResponse}
     */
    GetAccountTransferTemplateResponse,

    /**
     * The GetAccountTransfersFromAccountType model constructor.
     * @property {module:model/GetAccountTransfersFromAccountType}
     */
    GetAccountTransfersFromAccountType,

    /**
     * The GetAccountTransfersFromAccountTypeOptions model constructor.
     * @property {module:model/GetAccountTransfersFromAccountTypeOptions}
     */
    GetAccountTransfersFromAccountTypeOptions,

    /**
     * The GetAccountTransfersFromClientOptions model constructor.
     * @property {module:model/GetAccountTransfersFromClientOptions}
     */
    GetAccountTransfersFromClientOptions,

    /**
     * The GetAccountTransfersFromOffice model constructor.
     * @property {module:model/GetAccountTransfersFromOffice}
     */
    GetAccountTransfersFromOffice,

    /**
     * The GetAccountTransfersFromOfficeOptions model constructor.
     * @property {module:model/GetAccountTransfersFromOfficeOptions}
     */
    GetAccountTransfersFromOfficeOptions,

    /**
     * The GetAccountTransfersPageItems model constructor.
     * @property {module:model/GetAccountTransfersPageItems}
     */
    GetAccountTransfersPageItems,

    /**
     * The GetAccountTransfersPageItemsCurrency model constructor.
     * @property {module:model/GetAccountTransfersPageItemsCurrency}
     */
    GetAccountTransfersPageItemsCurrency,

    /**
     * The GetAccountTransfersPageItemsFromAccount model constructor.
     * @property {module:model/GetAccountTransfersPageItemsFromAccount}
     */
    GetAccountTransfersPageItemsFromAccount,

    /**
     * The GetAccountTransfersPageItemsFromOffice model constructor.
     * @property {module:model/GetAccountTransfersPageItemsFromOffice}
     */
    GetAccountTransfersPageItemsFromOffice,

    /**
     * The GetAccountTransfersPageItemsToAccountType model constructor.
     * @property {module:model/GetAccountTransfersPageItemsToAccountType}
     */
    GetAccountTransfersPageItemsToAccountType,

    /**
     * The GetAccountTransfersResponse model constructor.
     * @property {module:model/GetAccountTransfersResponse}
     */
    GetAccountTransfersResponse,

    /**
     * The GetAccountTransfersStatus model constructor.
     * @property {module:model/GetAccountTransfersStatus}
     */
    GetAccountTransfersStatus,

    /**
     * The GetAccountTransfersTemplateRefundByTransferCurrency model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferCurrency}
     */
    GetAccountTransfersTemplateRefundByTransferCurrency,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromAccount model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromAccount}
     */
    GetAccountTransfersTemplateRefundByTransferFromAccount,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromAccountOptions model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromAccountOptions}
     */
    GetAccountTransfersTemplateRefundByTransferFromAccountOptions,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromClient model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromClient}
     */
    GetAccountTransfersTemplateRefundByTransferFromClient,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromClientOptions model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromClientOptions}
     */
    GetAccountTransfersTemplateRefundByTransferFromClientOptions,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromOffice model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromOffice}
     */
    GetAccountTransfersTemplateRefundByTransferFromOffice,

    /**
     * The GetAccountTransfersTemplateRefundByTransferFromOfficeOptions model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions}
     */
    GetAccountTransfersTemplateRefundByTransferFromOfficeOptions,

    /**
     * The GetAccountTransfersTemplateRefundByTransferResponse model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferResponse}
     */
    GetAccountTransfersTemplateRefundByTransferResponse,

    /**
     * The GetAccountTransfersTemplateRefundByTransferToAccount model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferToAccount}
     */
    GetAccountTransfersTemplateRefundByTransferToAccount,

    /**
     * The GetAccountTransfersTemplateRefundByTransferToClient model constructor.
     * @property {module:model/GetAccountTransfersTemplateRefundByTransferToClient}
     */
    GetAccountTransfersTemplateRefundByTransferToClient,

    /**
     * The GetAccountTransfersTemplateResponse model constructor.
     * @property {module:model/GetAccountTransfersTemplateResponse}
     */
    GetAccountTransfersTemplateResponse,

    /**
     * The GetAccountTransfersTimeline model constructor.
     * @property {module:model/GetAccountTransfersTimeline}
     */
    GetAccountTransfersTimeline,

    /**
     * The GetAccountTransfersToAccountTypeOptions model constructor.
     * @property {module:model/GetAccountTransfersToAccountTypeOptions}
     */
    GetAccountTransfersToAccountTypeOptions,

    /**
     * The GetAccountTransfersToOfficeOptions model constructor.
     * @property {module:model/GetAccountTransfersToOfficeOptions}
     */
    GetAccountTransfersToOfficeOptions,

    /**
     * The GetAccountsChargeCalculationType model constructor.
     * @property {module:model/GetAccountsChargeCalculationType}
     */
    GetAccountsChargeCalculationType,

    /**
     * The GetAccountsChargeTimeType model constructor.
     * @property {module:model/GetAccountsChargeTimeType}
     */
    GetAccountsChargeTimeType,

    /**
     * The GetAccountsCharges model constructor.
     * @property {module:model/GetAccountsCharges}
     */
    GetAccountsCharges,

    /**
     * The GetAccountsChargesCurrency model constructor.
     * @property {module:model/GetAccountsChargesCurrency}
     */
    GetAccountsChargesCurrency,

    /**
     * The GetAccountsCurrency model constructor.
     * @property {module:model/GetAccountsCurrency}
     */
    GetAccountsCurrency,

    /**
     * The GetAccountsLinkedToPocketResponse model constructor.
     * @property {module:model/GetAccountsLinkedToPocketResponse}
     */
    GetAccountsLinkedToPocketResponse,

    /**
     * The GetAccountsLockPeriodTypeEnum model constructor.
     * @property {module:model/GetAccountsLockPeriodTypeEnum}
     */
    GetAccountsLockPeriodTypeEnum,

    /**
     * The GetAccountsPageItems model constructor.
     * @property {module:model/GetAccountsPageItems}
     */
    GetAccountsPageItems,

    /**
     * The GetAccountsPurchasedShares model constructor.
     * @property {module:model/GetAccountsPurchasedShares}
     */
    GetAccountsPurchasedShares,

    /**
     * The GetAccountsPurchasedSharesStatus model constructor.
     * @property {module:model/GetAccountsPurchasedSharesStatus}
     */
    GetAccountsPurchasedSharesStatus,

    /**
     * The GetAccountsPurchasedSharesType model constructor.
     * @property {module:model/GetAccountsPurchasedSharesType}
     */
    GetAccountsPurchasedSharesType,

    /**
     * The GetAccountsStatus model constructor.
     * @property {module:model/GetAccountsStatus}
     */
    GetAccountsStatus,

    /**
     * The GetAccountsSummary model constructor.
     * @property {module:model/GetAccountsSummary}
     */
    GetAccountsSummary,

    /**
     * The GetAccountsTimeline model constructor.
     * @property {module:model/GetAccountsTimeline}
     */
    GetAccountsTimeline,

    /**
     * The GetAccountsTypeAccountIdResponse model constructor.
     * @property {module:model/GetAccountsTypeAccountIdResponse}
     */
    GetAccountsTypeAccountIdResponse,

    /**
     * The GetAccountsTypeProductOptions model constructor.
     * @property {module:model/GetAccountsTypeProductOptions}
     */
    GetAccountsTypeProductOptions,

    /**
     * The GetAccountsTypePurchasedShares model constructor.
     * @property {module:model/GetAccountsTypePurchasedShares}
     */
    GetAccountsTypePurchasedShares,

    /**
     * The GetAccountsTypeResponse model constructor.
     * @property {module:model/GetAccountsTypeResponse}
     */
    GetAccountsTypeResponse,

    /**
     * The GetAccountsTypeStatus model constructor.
     * @property {module:model/GetAccountsTypeStatus}
     */
    GetAccountsTypeStatus,

    /**
     * The GetAccountsTypeSummary model constructor.
     * @property {module:model/GetAccountsTypeSummary}
     */
    GetAccountsTypeSummary,

    /**
     * The GetAccountsTypeTemplateResponse model constructor.
     * @property {module:model/GetAccountsTypeTemplateResponse}
     */
    GetAccountsTypeTemplateResponse,

    /**
     * The GetAccountsTypeTimeline model constructor.
     * @property {module:model/GetAccountsTypeTimeline}
     */
    GetAccountsTypeTimeline,

    /**
     * The GetAssetType model constructor.
     * @property {module:model/GetAssetType}
     */
    GetAssetType,

    /**
     * The GetCachesResponse model constructor.
     * @property {module:model/GetCachesResponse}
     */
    GetCachesResponse,

    /**
     * The GetCentersAccountType model constructor.
     * @property {module:model/GetCentersAccountType}
     */
    GetCentersAccountType,

    /**
     * The GetCentersCenterIdAccountsResponse model constructor.
     * @property {module:model/GetCentersCenterIdAccountsResponse}
     */
    GetCentersCenterIdAccountsResponse,

    /**
     * The GetCentersCenterIdCurrency model constructor.
     * @property {module:model/GetCentersCenterIdCurrency}
     */
    GetCentersCenterIdCurrency,

    /**
     * The GetCentersCenterIdResponse model constructor.
     * @property {module:model/GetCentersCenterIdResponse}
     */
    GetCentersCenterIdResponse,

    /**
     * The GetCentersCenterIdStatus model constructor.
     * @property {module:model/GetCentersCenterIdStatus}
     */
    GetCentersCenterIdStatus,

    /**
     * The GetCentersDepositType model constructor.
     * @property {module:model/GetCentersDepositType}
     */
    GetCentersDepositType,

    /**
     * The GetCentersOfficeOptions model constructor.
     * @property {module:model/GetCentersOfficeOptions}
     */
    GetCentersOfficeOptions,

    /**
     * The GetCentersPageItems model constructor.
     * @property {module:model/GetCentersPageItems}
     */
    GetCentersPageItems,

    /**
     * The GetCentersResponse model constructor.
     * @property {module:model/GetCentersResponse}
     */
    GetCentersResponse,

    /**
     * The GetCentersSavingsAccounts model constructor.
     * @property {module:model/GetCentersSavingsAccounts}
     */
    GetCentersSavingsAccounts,

    /**
     * The GetCentersStaffOptions model constructor.
     * @property {module:model/GetCentersStaffOptions}
     */
    GetCentersStaffOptions,

    /**
     * The GetCentersStatus model constructor.
     * @property {module:model/GetCentersStatus}
     */
    GetCentersStatus,

    /**
     * The GetCentersTemplateResponse model constructor.
     * @property {module:model/GetCentersTemplateResponse}
     */
    GetCentersTemplateResponse,

    /**
     * The GetCentersTimeline model constructor.
     * @property {module:model/GetCentersTimeline}
     */
    GetCentersTimeline,

    /**
     * The GetChargeAppliesTo model constructor.
     * @property {module:model/GetChargeAppliesTo}
     */
    GetChargeAppliesTo,

    /**
     * The GetChargeCalculationType model constructor.
     * @property {module:model/GetChargeCalculationType}
     */
    GetChargeCalculationType,

    /**
     * The GetChargePaymentMode model constructor.
     * @property {module:model/GetChargePaymentMode}
     */
    GetChargePaymentMode,

    /**
     * The GetChargeTimeType model constructor.
     * @property {module:model/GetChargeTimeType}
     */
    GetChargeTimeType,

    /**
     * The GetChargesAppliesTo model constructor.
     * @property {module:model/GetChargesAppliesTo}
     */
    GetChargesAppliesTo,

    /**
     * The GetChargesAppliesToResponse model constructor.
     * @property {module:model/GetChargesAppliesToResponse}
     */
    GetChargesAppliesToResponse,

    /**
     * The GetChargesCalculationTypeResponse model constructor.
     * @property {module:model/GetChargesCalculationTypeResponse}
     */
    GetChargesCalculationTypeResponse,

    /**
     * The GetChargesChargeCalculationType model constructor.
     * @property {module:model/GetChargesChargeCalculationType}
     */
    GetChargesChargeCalculationType,

    /**
     * The GetChargesChargeTimeType model constructor.
     * @property {module:model/GetChargesChargeTimeType}
     */
    GetChargesChargeTimeType,

    /**
     * The GetChargesCurrency model constructor.
     * @property {module:model/GetChargesCurrency}
     */
    GetChargesCurrency,

    /**
     * The GetChargesCurrencyResponse model constructor.
     * @property {module:model/GetChargesCurrencyResponse}
     */
    GetChargesCurrencyResponse,

    /**
     * The GetChargesPaymentModeResponse model constructor.
     * @property {module:model/GetChargesPaymentModeResponse}
     */
    GetChargesPaymentModeResponse,

    /**
     * The GetChargesResponse model constructor.
     * @property {module:model/GetChargesResponse}
     */
    GetChargesResponse,

    /**
     * The GetChargesTemplateFeeFrequencyOptions model constructor.
     * @property {module:model/GetChargesTemplateFeeFrequencyOptions}
     */
    GetChargesTemplateFeeFrequencyOptions,

    /**
     * The GetChargesTemplateLoanChargeCalculationTypeOptions model constructor.
     * @property {module:model/GetChargesTemplateLoanChargeCalculationTypeOptions}
     */
    GetChargesTemplateLoanChargeCalculationTypeOptions,

    /**
     * The GetChargesTemplateLoanChargeTimeTypeOptions model constructor.
     * @property {module:model/GetChargesTemplateLoanChargeTimeTypeOptions}
     */
    GetChargesTemplateLoanChargeTimeTypeOptions,

    /**
     * The GetChargesTemplateResponse model constructor.
     * @property {module:model/GetChargesTemplateResponse}
     */
    GetChargesTemplateResponse,

    /**
     * The GetChargesTimeTypeResponse model constructor.
     * @property {module:model/GetChargesTimeTypeResponse}
     */
    GetChargesTimeTypeResponse,

    /**
     * The GetClientChargeCalculationType model constructor.
     * @property {module:model/GetClientChargeCalculationType}
     */
    GetClientChargeCalculationType,

    /**
     * The GetClientChargeCurrency model constructor.
     * @property {module:model/GetClientChargeCurrency}
     */
    GetClientChargeCurrency,

    /**
     * The GetClientChargeTimeType model constructor.
     * @property {module:model/GetClientChargeTimeType}
     */
    GetClientChargeTimeType,

    /**
     * The GetClientClientIdAddressesResponse model constructor.
     * @property {module:model/GetClientClientIdAddressesResponse}
     */
    GetClientClientIdAddressesResponse,

    /**
     * The GetClientIdProductIdAccountingMappings model constructor.
     * @property {module:model/GetClientIdProductIdAccountingMappings}
     */
    GetClientIdProductIdAccountingMappings,

    /**
     * The GetClientIdProductIdChargeOptions model constructor.
     * @property {module:model/GetClientIdProductIdChargeOptions}
     */
    GetClientIdProductIdChargeOptions,

    /**
     * The GetClientIdProductIdLockinPeriodFrequencyTypeOptions model constructor.
     * @property {module:model/GetClientIdProductIdLockinPeriodFrequencyTypeOptions}
     */
    GetClientIdProductIdLockinPeriodFrequencyTypeOptions,

    /**
     * The GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions model constructor.
     * @property {module:model/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions}
     */
    GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions,

    /**
     * The GetClientIdProductIdProductOptions model constructor.
     * @property {module:model/GetClientIdProductIdProductOptions}
     */
    GetClientIdProductIdProductOptions,

    /**
     * The GetClientStatus model constructor.
     * @property {module:model/GetClientStatus}
     */
    GetClientStatus,

    /**
     * The GetClientTransactionsCurrency model constructor.
     * @property {module:model/GetClientTransactionsCurrency}
     */
    GetClientTransactionsCurrency,

    /**
     * The GetClientsAllowedDocumentTypes model constructor.
     * @property {module:model/GetClientsAllowedDocumentTypes}
     */
    GetClientsAllowedDocumentTypes,

    /**
     * The GetClientsChargesPageItems model constructor.
     * @property {module:model/GetClientsChargesPageItems}
     */
    GetClientsChargesPageItems,

    /**
     * The GetClientsClientIdAccountsResponse model constructor.
     * @property {module:model/GetClientsClientIdAccountsResponse}
     */
    GetClientsClientIdAccountsResponse,

    /**
     * The GetClientsClientIdChargesResponse model constructor.
     * @property {module:model/GetClientsClientIdChargesResponse}
     */
    GetClientsClientIdChargesResponse,

    /**
     * The GetClientsClientIdIdentifiersResponse model constructor.
     * @property {module:model/GetClientsClientIdIdentifiersResponse}
     */
    GetClientsClientIdIdentifiersResponse,

    /**
     * The GetClientsClientIdIdentifiersTemplateResponse model constructor.
     * @property {module:model/GetClientsClientIdIdentifiersTemplateResponse}
     */
    GetClientsClientIdIdentifiersTemplateResponse,

    /**
     * The GetClientsClientIdResponse model constructor.
     * @property {module:model/GetClientsClientIdResponse}
     */
    GetClientsClientIdResponse,

    /**
     * The GetClientsClientIdStatus model constructor.
     * @property {module:model/GetClientsClientIdStatus}
     */
    GetClientsClientIdStatus,

    /**
     * The GetClientsClientIdTransactionsResponse model constructor.
     * @property {module:model/GetClientsClientIdTransactionsResponse}
     */
    GetClientsClientIdTransactionsResponse,

    /**
     * The GetClientsClientIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetClientsClientIdTransactionsTransactionIdResponse}
     */
    GetClientsClientIdTransactionsTransactionIdResponse,

    /**
     * The GetClientsClientIdTransactionsType model constructor.
     * @property {module:model/GetClientsClientIdTransactionsType}
     */
    GetClientsClientIdTransactionsType,

    /**
     * The GetClientsColumnHeaderData model constructor.
     * @property {module:model/GetClientsColumnHeaderData}
     */
    GetClientsColumnHeaderData,

    /**
     * The GetClientsDataTables model constructor.
     * @property {module:model/GetClientsDataTables}
     */
    GetClientsDataTables,

    /**
     * The GetClientsDocumentType model constructor.
     * @property {module:model/GetClientsDocumentType}
     */
    GetClientsDocumentType,

    /**
     * The GetClientsLoanAccounts model constructor.
     * @property {module:model/GetClientsLoanAccounts}
     */
    GetClientsLoanAccounts,

    /**
     * The GetClientsLoanAccountsStatus model constructor.
     * @property {module:model/GetClientsLoanAccountsStatus}
     */
    GetClientsLoanAccountsStatus,

    /**
     * The GetClientsLoanAccountsType model constructor.
     * @property {module:model/GetClientsLoanAccountsType}
     */
    GetClientsLoanAccountsType,

    /**
     * The GetClientsOfficeOptions model constructor.
     * @property {module:model/GetClientsOfficeOptions}
     */
    GetClientsOfficeOptions,

    /**
     * The GetClientsPageItems model constructor.
     * @property {module:model/GetClientsPageItems}
     */
    GetClientsPageItems,

    /**
     * The GetClientsPageItemsResponse model constructor.
     * @property {module:model/GetClientsPageItemsResponse}
     */
    GetClientsPageItemsResponse,

    /**
     * The GetClientsResponse model constructor.
     * @property {module:model/GetClientsResponse}
     */
    GetClientsResponse,

    /**
     * The GetClientsSavingProductOptions model constructor.
     * @property {module:model/GetClientsSavingProductOptions}
     */
    GetClientsSavingProductOptions,

    /**
     * The GetClientsSavingsAccounts model constructor.
     * @property {module:model/GetClientsSavingsAccounts}
     */
    GetClientsSavingsAccounts,

    /**
     * The GetClientsSavingsAccountsCurrency model constructor.
     * @property {module:model/GetClientsSavingsAccountsCurrency}
     */
    GetClientsSavingsAccountsCurrency,

    /**
     * The GetClientsSavingsAccountsStatus model constructor.
     * @property {module:model/GetClientsSavingsAccountsStatus}
     */
    GetClientsSavingsAccountsStatus,

    /**
     * The GetClientsStaffOptions model constructor.
     * @property {module:model/GetClientsStaffOptions}
     */
    GetClientsStaffOptions,

    /**
     * The GetClientsTemplateResponse model constructor.
     * @property {module:model/GetClientsTemplateResponse}
     */
    GetClientsTemplateResponse,

    /**
     * The GetClientsTimeline model constructor.
     * @property {module:model/GetClientsTimeline}
     */
    GetClientsTimeline,

    /**
     * The GetCodeValuesDataResponse model constructor.
     * @property {module:model/GetCodeValuesDataResponse}
     */
    GetCodeValuesDataResponse,

    /**
     * The GetCodesResponse model constructor.
     * @property {module:model/GetCodesResponse}
     */
    GetCodesResponse,

    /**
     * The GetCollateralCurrencyResponse model constructor.
     * @property {module:model/GetCollateralCurrencyResponse}
     */
    GetCollateralCurrencyResponse,

    /**
     * The GetCollateralTypeResponse model constructor.
     * @property {module:model/GetCollateralTypeResponse}
     */
    GetCollateralTypeResponse,

    /**
     * The GetCollateralsTemplateAllowedTypes model constructor.
     * @property {module:model/GetCollateralsTemplateAllowedTypes}
     */
    GetCollateralsTemplateAllowedTypes,

    /**
     * The GetCurrenciesResponse model constructor.
     * @property {module:model/GetCurrenciesResponse}
     */
    GetCurrenciesResponse,

    /**
     * The GetDataTablesAppTableIdResponse model constructor.
     * @property {module:model/GetDataTablesAppTableIdResponse}
     */
    GetDataTablesAppTableIdResponse,

    /**
     * The GetDataTablesResponse model constructor.
     * @property {module:model/GetDataTablesResponse}
     */
    GetDataTablesResponse,

    /**
     * The GetEntityDatatableChecksResponse model constructor.
     * @property {module:model/GetEntityDatatableChecksResponse}
     */
    GetEntityDatatableChecksResponse,

    /**
     * The GetEntityDatatableChecksTemplateResponse model constructor.
     * @property {module:model/GetEntityDatatableChecksTemplateResponse}
     */
    GetEntityDatatableChecksTemplateResponse,

    /**
     * The GetEntityTypeEntityIdDocumentsResponse model constructor.
     * @property {module:model/GetEntityTypeEntityIdDocumentsResponse}
     */
    GetEntityTypeEntityIdDocumentsResponse,

    /**
     * The GetEquityType model constructor.
     * @property {module:model/GetEquityType}
     */
    GetEquityType,

    /**
     * The GetFieldConfigurationEntityResponse model constructor.
     * @property {module:model/GetFieldConfigurationEntityResponse}
     */
    GetFieldConfigurationEntityResponse,

    /**
     * The GetFinancialActivityAccountsResponse model constructor.
     * @property {module:model/GetFinancialActivityAccountsResponse}
     */
    GetFinancialActivityAccountsResponse,

    /**
     * The GetFixedDepositAccountsAccountChart model constructor.
     * @property {module:model/GetFixedDepositAccountsAccountChart}
     */
    GetFixedDepositAccountsAccountChart,

    /**
     * The GetFixedDepositAccountsAccountChartCurrency model constructor.
     * @property {module:model/GetFixedDepositAccountsAccountChartCurrency}
     */
    GetFixedDepositAccountsAccountChartCurrency,

    /**
     * The GetFixedDepositAccountsAccountIdCurrency model constructor.
     * @property {module:model/GetFixedDepositAccountsAccountIdCurrency}
     */
    GetFixedDepositAccountsAccountIdCurrency,

    /**
     * The GetFixedDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/GetFixedDepositAccountsAccountIdResponse}
     */
    GetFixedDepositAccountsAccountIdResponse,

    /**
     * The GetFixedDepositAccountsAccountIdSummary model constructor.
     * @property {module:model/GetFixedDepositAccountsAccountIdSummary}
     */
    GetFixedDepositAccountsAccountIdSummary,

    /**
     * The GetFixedDepositAccountsChartSlabs model constructor.
     * @property {module:model/GetFixedDepositAccountsChartSlabs}
     */
    GetFixedDepositAccountsChartSlabs,

    /**
     * The GetFixedDepositAccountsCurrency model constructor.
     * @property {module:model/GetFixedDepositAccountsCurrency}
     */
    GetFixedDepositAccountsCurrency,

    /**
     * The GetFixedDepositAccountsDepositPeriodFrequency model constructor.
     * @property {module:model/GetFixedDepositAccountsDepositPeriodFrequency}
     */
    GetFixedDepositAccountsDepositPeriodFrequency,

    /**
     * The GetFixedDepositAccountsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetFixedDepositAccountsInterestCalculationDaysInYearType}
     */
    GetFixedDepositAccountsInterestCalculationDaysInYearType,

    /**
     * The GetFixedDepositAccountsInterestCalculationType model constructor.
     * @property {module:model/GetFixedDepositAccountsInterestCalculationType}
     */
    GetFixedDepositAccountsInterestCalculationType,

    /**
     * The GetFixedDepositAccountsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetFixedDepositAccountsInterestCompoundingPeriodType}
     */
    GetFixedDepositAccountsInterestCompoundingPeriodType,

    /**
     * The GetFixedDepositAccountsInterestPostingPeriodType model constructor.
     * @property {module:model/GetFixedDepositAccountsInterestPostingPeriodType}
     */
    GetFixedDepositAccountsInterestPostingPeriodType,

    /**
     * The GetFixedDepositAccountsMaxDepositTermType model constructor.
     * @property {module:model/GetFixedDepositAccountsMaxDepositTermType}
     */
    GetFixedDepositAccountsMaxDepositTermType,

    /**
     * The GetFixedDepositAccountsMinDepositTermType model constructor.
     * @property {module:model/GetFixedDepositAccountsMinDepositTermType}
     */
    GetFixedDepositAccountsMinDepositTermType,

    /**
     * The GetFixedDepositAccountsPeriodType model constructor.
     * @property {module:model/GetFixedDepositAccountsPeriodType}
     */
    GetFixedDepositAccountsPeriodType,

    /**
     * The GetFixedDepositAccountsPeriodTypes model constructor.
     * @property {module:model/GetFixedDepositAccountsPeriodTypes}
     */
    GetFixedDepositAccountsPeriodTypes,

    /**
     * The GetFixedDepositAccountsProductOptions model constructor.
     * @property {module:model/GetFixedDepositAccountsProductOptions}
     */
    GetFixedDepositAccountsProductOptions,

    /**
     * The GetFixedDepositAccountsResponse model constructor.
     * @property {module:model/GetFixedDepositAccountsResponse}
     */
    GetFixedDepositAccountsResponse,

    /**
     * The GetFixedDepositAccountsStatus model constructor.
     * @property {module:model/GetFixedDepositAccountsStatus}
     */
    GetFixedDepositAccountsStatus,

    /**
     * The GetFixedDepositAccountsSummary model constructor.
     * @property {module:model/GetFixedDepositAccountsSummary}
     */
    GetFixedDepositAccountsSummary,

    /**
     * The GetFixedDepositAccountsTemplateResponse model constructor.
     * @property {module:model/GetFixedDepositAccountsTemplateResponse}
     */
    GetFixedDepositAccountsTemplateResponse,

    /**
     * The GetFixedDepositAccountsTimeline model constructor.
     * @property {module:model/GetFixedDepositAccountsTimeline}
     */
    GetFixedDepositAccountsTimeline,

    /**
     * The GetFixedDepositProductsAccountingRule model constructor.
     * @property {module:model/GetFixedDepositProductsAccountingRule}
     */
    GetFixedDepositProductsAccountingRule,

    /**
     * The GetFixedDepositProductsCurrency model constructor.
     * @property {module:model/GetFixedDepositProductsCurrency}
     */
    GetFixedDepositProductsCurrency,

    /**
     * The GetFixedDepositProductsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetFixedDepositProductsInterestCalculationDaysInYearType}
     */
    GetFixedDepositProductsInterestCalculationDaysInYearType,

    /**
     * The GetFixedDepositProductsInterestCalculationType model constructor.
     * @property {module:model/GetFixedDepositProductsInterestCalculationType}
     */
    GetFixedDepositProductsInterestCalculationType,

    /**
     * The GetFixedDepositProductsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetFixedDepositProductsInterestCompoundingPeriodType}
     */
    GetFixedDepositProductsInterestCompoundingPeriodType,

    /**
     * The GetFixedDepositProductsInterestPostingPeriodType model constructor.
     * @property {module:model/GetFixedDepositProductsInterestPostingPeriodType}
     */
    GetFixedDepositProductsInterestPostingPeriodType,

    /**
     * The GetFixedDepositProductsMaxDepositTermType model constructor.
     * @property {module:model/GetFixedDepositProductsMaxDepositTermType}
     */
    GetFixedDepositProductsMaxDepositTermType,

    /**
     * The GetFixedDepositProductsMinDepositTermType model constructor.
     * @property {module:model/GetFixedDepositProductsMinDepositTermType}
     */
    GetFixedDepositProductsMinDepositTermType,

    /**
     * The GetFixedDepositProductsProductIdAccountingMappings model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdAccountingMappings}
     */
    GetFixedDepositProductsProductIdAccountingMappings,

    /**
     * The GetFixedDepositProductsProductIdActiveChart model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdActiveChart}
     */
    GetFixedDepositProductsProductIdActiveChart,

    /**
     * The GetFixedDepositProductsProductIdChartSlabs model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdChartSlabs}
     */
    GetFixedDepositProductsProductIdChartSlabs,

    /**
     * The GetFixedDepositProductsProductIdCurrency model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdCurrency}
     */
    GetFixedDepositProductsProductIdCurrency,

    /**
     * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappings model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings}
     */
    GetFixedDepositProductsProductIdFeeToIncomeAccountMappings,

    /**
     * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge}
     */
    GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge,

    /**
     * The GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount}
     */
    GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount,

    /**
     * The GetFixedDepositProductsProductIdIncomeFromFeeAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdIncomeFromFeeAccount}
     */
    GetFixedDepositProductsProductIdIncomeFromFeeAccount,

    /**
     * The GetFixedDepositProductsProductIdIncomeFromPenaltyAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdIncomeFromPenaltyAccount}
     */
    GetFixedDepositProductsProductIdIncomeFromPenaltyAccount,

    /**
     * The GetFixedDepositProductsProductIdInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType}
     */
    GetFixedDepositProductsProductIdInterestCompoundingPeriodType,

    /**
     * The GetFixedDepositProductsProductIdInterestOnSavingsAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdInterestOnSavingsAccount}
     */
    GetFixedDepositProductsProductIdInterestOnSavingsAccount,

    /**
     * The GetFixedDepositProductsProductIdMaxDepositTermType model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdMaxDepositTermType}
     */
    GetFixedDepositProductsProductIdMaxDepositTermType,

    /**
     * The GetFixedDepositProductsProductIdMinDepositTermType model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdMinDepositTermType}
     */
    GetFixedDepositProductsProductIdMinDepositTermType,

    /**
     * The GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings}
     */
    GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings,

    /**
     * The GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge}
     */
    GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge,

    /**
     * The GetFixedDepositProductsProductIdPeriodType model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdPeriodType}
     */
    GetFixedDepositProductsProductIdPeriodType,

    /**
     * The GetFixedDepositProductsProductIdPreClosurePenalInterestOnType model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType}
     */
    GetFixedDepositProductsProductIdPreClosurePenalInterestOnType,

    /**
     * The GetFixedDepositProductsProductIdResponse model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdResponse}
     */
    GetFixedDepositProductsProductIdResponse,

    /**
     * The GetFixedDepositProductsProductIdSavingsControlAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdSavingsControlAccount}
     */
    GetFixedDepositProductsProductIdSavingsControlAccount,

    /**
     * The GetFixedDepositProductsProductIdSavingsReferenceAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdSavingsReferenceAccount}
     */
    GetFixedDepositProductsProductIdSavingsReferenceAccount,

    /**
     * The GetFixedDepositProductsProductIdTransfersInSuspenseAccount model constructor.
     * @property {module:model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount}
     */
    GetFixedDepositProductsProductIdTransfersInSuspenseAccount,

    /**
     * The GetFixedDepositProductsResponse model constructor.
     * @property {module:model/GetFixedDepositProductsResponse}
     */
    GetFixedDepositProductsResponse,

    /**
     * The GetFloatingRatesFloatingRateIdResponse model constructor.
     * @property {module:model/GetFloatingRatesFloatingRateIdResponse}
     */
    GetFloatingRatesFloatingRateIdResponse,

    /**
     * The GetFloatingRatesRatePeriods model constructor.
     * @property {module:model/GetFloatingRatesRatePeriods}
     */
    GetFloatingRatesRatePeriods,

    /**
     * The GetFloatingRatesResponse model constructor.
     * @property {module:model/GetFloatingRatesResponse}
     */
    GetFloatingRatesResponse,

    /**
     * The GetFromAccountOptions model constructor.
     * @property {module:model/GetFromAccountOptions}
     */
    GetFromAccountOptions,

    /**
     * The GetFromAccountStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromAccountStandingInstructionSwagger}
     */
    GetFromAccountStandingInstructionSwagger,

    /**
     * The GetFromAccountTypeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromAccountTypeOptionsResponseStandingInstructionSwagger}
     */
    GetFromAccountTypeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetFromAccountTypeResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromAccountTypeResponseStandingInstructionSwagger}
     */
    GetFromAccountTypeResponseStandingInstructionSwagger,

    /**
     * The GetFromAccountTypeStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromAccountTypeStandingInstructionSwagger}
     */
    GetFromAccountTypeStandingInstructionSwagger,

    /**
     * The GetFromClientOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromClientOptionsResponseStandingInstructionSwagger}
     */
    GetFromClientOptionsResponseStandingInstructionSwagger,

    /**
     * The GetFromClientStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromClientStandingInstructionSwagger}
     */
    GetFromClientStandingInstructionSwagger,

    /**
     * The GetFromOfficeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromOfficeOptionsResponseStandingInstructionSwagger}
     */
    GetFromOfficeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetFromOfficeResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromOfficeResponseStandingInstructionSwagger}
     */
    GetFromOfficeResponseStandingInstructionSwagger,

    /**
     * The GetFromOfficeStandingInstructionSwagger model constructor.
     * @property {module:model/GetFromOfficeStandingInstructionSwagger}
     */
    GetFromOfficeStandingInstructionSwagger,

    /**
     * The GetFundsResponse model constructor.
     * @property {module:model/GetFundsResponse}
     */
    GetFundsResponse,

    /**
     * The GetGLAccountsResponse model constructor.
     * @property {module:model/GetGLAccountsResponse}
     */
    GetGLAccountsResponse,

    /**
     * The GetGLAccountsTemplateResponse model constructor.
     * @property {module:model/GetGLAccountsTemplateResponse}
     */
    GetGLAccountsTemplateResponse,

    /**
     * The GetGlClosureResponse model constructor.
     * @property {module:model/GetGlClosureResponse}
     */
    GetGlClosureResponse,

    /**
     * The GetGlobalConfigurationsResponse model constructor.
     * @property {module:model/GetGlobalConfigurationsResponse}
     */
    GetGlobalConfigurationsResponse,

    /**
     * The GetGroupsGroupIdAccountsLoanAccounts model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsLoanAccounts}
     */
    GetGroupsGroupIdAccountsLoanAccounts,

    /**
     * The GetGroupsGroupIdAccountsLoanType model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsLoanType}
     */
    GetGroupsGroupIdAccountsLoanType,

    /**
     * The GetGroupsGroupIdAccountsMemberLoanAccounts model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsMemberLoanAccounts}
     */
    GetGroupsGroupIdAccountsMemberLoanAccounts,

    /**
     * The GetGroupsGroupIdAccountsMemberLoanStatus model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsMemberLoanStatus}
     */
    GetGroupsGroupIdAccountsMemberLoanStatus,

    /**
     * The GetGroupsGroupIdAccountsMemberLoanType model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsMemberLoanType}
     */
    GetGroupsGroupIdAccountsMemberLoanType,

    /**
     * The GetGroupsGroupIdAccountsMemberSavingsAccounts model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsMemberSavingsAccounts}
     */
    GetGroupsGroupIdAccountsMemberSavingsAccounts,

    /**
     * The GetGroupsGroupIdAccountsResponse model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsResponse}
     */
    GetGroupsGroupIdAccountsResponse,

    /**
     * The GetGroupsGroupIdAccountsSavingAccountType model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsSavingAccountType}
     */
    GetGroupsGroupIdAccountsSavingAccountType,

    /**
     * The GetGroupsGroupIdAccountsSavingAccounts model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsSavingAccounts}
     */
    GetGroupsGroupIdAccountsSavingAccounts,

    /**
     * The GetGroupsGroupIdAccountsSavingCurrency model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsSavingCurrency}
     */
    GetGroupsGroupIdAccountsSavingCurrency,

    /**
     * The GetGroupsGroupIdAccountsSavingStatus model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsSavingStatus}
     */
    GetGroupsGroupIdAccountsSavingStatus,

    /**
     * The GetGroupsGroupIdAccountsStatus model constructor.
     * @property {module:model/GetGroupsGroupIdAccountsStatus}
     */
    GetGroupsGroupIdAccountsStatus,

    /**
     * The GetGroupsGroupIdResponse model constructor.
     * @property {module:model/GetGroupsGroupIdResponse}
     */
    GetGroupsGroupIdResponse,

    /**
     * The GetGroupsGroupIdTimeline model constructor.
     * @property {module:model/GetGroupsGroupIdTimeline}
     */
    GetGroupsGroupIdTimeline,

    /**
     * The GetGroupsPageItems model constructor.
     * @property {module:model/GetGroupsPageItems}
     */
    GetGroupsPageItems,

    /**
     * The GetGroupsResponse model constructor.
     * @property {module:model/GetGroupsResponse}
     */
    GetGroupsResponse,

    /**
     * The GetGroupsStatus model constructor.
     * @property {module:model/GetGroupsStatus}
     */
    GetGroupsStatus,

    /**
     * The GetGroupsTemplateClientOptions model constructor.
     * @property {module:model/GetGroupsTemplateClientOptions}
     */
    GetGroupsTemplateClientOptions,

    /**
     * The GetGroupsTemplateColumnHeaderData model constructor.
     * @property {module:model/GetGroupsTemplateColumnHeaderData}
     */
    GetGroupsTemplateColumnHeaderData,

    /**
     * The GetGroupsTemplateDatatables model constructor.
     * @property {module:model/GetGroupsTemplateDatatables}
     */
    GetGroupsTemplateDatatables,

    /**
     * The GetGroupsTemplateOfficeOptions model constructor.
     * @property {module:model/GetGroupsTemplateOfficeOptions}
     */
    GetGroupsTemplateOfficeOptions,

    /**
     * The GetGroupsTemplateResponse model constructor.
     * @property {module:model/GetGroupsTemplateResponse}
     */
    GetGroupsTemplateResponse,

    /**
     * The GetGroupsTemplateStaffOptions model constructor.
     * @property {module:model/GetGroupsTemplateStaffOptions}
     */
    GetGroupsTemplateStaffOptions,

    /**
     * The GetHolidaysResponse model constructor.
     * @property {module:model/GetHolidaysResponse}
     */
    GetHolidaysResponse,

    /**
     * The GetHookResponse model constructor.
     * @property {module:model/GetHookResponse}
     */
    GetHookResponse,

    /**
     * The GetHookTemplateResponse model constructor.
     * @property {module:model/GetHookTemplateResponse}
     */
    GetHookTemplateResponse,

    /**
     * The GetIncomeFromFeeAccountId model constructor.
     * @property {module:model/GetIncomeFromFeeAccountId}
     */
    GetIncomeFromFeeAccountId,

    /**
     * The GetIncomeType model constructor.
     * @property {module:model/GetIncomeType}
     */
    GetIncomeType,

    /**
     * The GetInstructionTypeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetInstructionTypeOptionsResponseStandingInstructionSwagger}
     */
    GetInstructionTypeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetInstructionTypeStandingInstructionSwagger model constructor.
     * @property {module:model/GetInstructionTypeStandingInstructionSwagger}
     */
    GetInstructionTypeStandingInstructionSwagger,

    /**
     * The GetInterestRateChartsChartIdChartSlabsAttributeName model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsAttributeName}
     */
    GetInterestRateChartsChartIdChartSlabsAttributeName,

    /**
     * The GetInterestRateChartsChartIdChartSlabsConditionType model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsConditionType}
     */
    GetInterestRateChartsChartIdChartSlabsConditionType,

    /**
     * The GetInterestRateChartsChartIdChartSlabsEntityType model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsEntityType}
     */
    GetInterestRateChartsChartIdChartSlabsEntityType,

    /**
     * The GetInterestRateChartsChartIdChartSlabsIncentiveType model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsIncentiveType}
     */
    GetInterestRateChartsChartIdChartSlabsIncentiveType,

    /**
     * The GetInterestRateChartsChartIdChartSlabsIncentives model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsIncentives}
     */
    GetInterestRateChartsChartIdChartSlabsIncentives,

    /**
     * The GetInterestRateChartsChartIdChartSlabsResponse model constructor.
     * @property {module:model/GetInterestRateChartsChartIdChartSlabsResponse}
     */
    GetInterestRateChartsChartIdChartSlabsResponse,

    /**
     * The GetInterestRateChartsChartSlabs model constructor.
     * @property {module:model/GetInterestRateChartsChartSlabs}
     */
    GetInterestRateChartsChartSlabs,

    /**
     * The GetInterestRateChartsCurrency model constructor.
     * @property {module:model/GetInterestRateChartsCurrency}
     */
    GetInterestRateChartsCurrency,

    /**
     * The GetInterestRateChartsResponse model constructor.
     * @property {module:model/GetInterestRateChartsResponse}
     */
    GetInterestRateChartsResponse,

    /**
     * The GetInterestRateChartsTemplatePeriodTypes model constructor.
     * @property {module:model/GetInterestRateChartsTemplatePeriodTypes}
     */
    GetInterestRateChartsTemplatePeriodTypes,

    /**
     * The GetInterestRateChartsTemplateResponse model constructor.
     * @property {module:model/GetInterestRateChartsTemplateResponse}
     */
    GetInterestRateChartsTemplateResponse,

    /**
     * The GetJobsJobIDJobRunHistoryResponse model constructor.
     * @property {module:model/GetJobsJobIDJobRunHistoryResponse}
     */
    GetJobsJobIDJobRunHistoryResponse,

    /**
     * The GetJobsResponse model constructor.
     * @property {module:model/GetJobsResponse}
     */
    GetJobsResponse,

    /**
     * The GetLoanAccountingMappings model constructor.
     * @property {module:model/GetLoanAccountingMappings}
     */
    GetLoanAccountingMappings,

    /**
     * The GetLoanCharge model constructor.
     * @property {module:model/GetLoanCharge}
     */
    GetLoanCharge,

    /**
     * The GetLoanChargeCalculationType model constructor.
     * @property {module:model/GetLoanChargeCalculationType}
     */
    GetLoanChargeCalculationType,

    /**
     * The GetLoanChargeCurrency model constructor.
     * @property {module:model/GetLoanChargeCurrency}
     */
    GetLoanChargeCurrency,

    /**
     * The GetLoanChargeTemplateChargeAppliesTo model constructor.
     * @property {module:model/GetLoanChargeTemplateChargeAppliesTo}
     */
    GetLoanChargeTemplateChargeAppliesTo,

    /**
     * The GetLoanChargeTemplateChargeOptions model constructor.
     * @property {module:model/GetLoanChargeTemplateChargeOptions}
     */
    GetLoanChargeTemplateChargeOptions,

    /**
     * The GetLoanChargeTemplateChargeTimeType model constructor.
     * @property {module:model/GetLoanChargeTemplateChargeTimeType}
     */
    GetLoanChargeTemplateChargeTimeType,

    /**
     * The GetLoanChargeTimeType model constructor.
     * @property {module:model/GetLoanChargeTimeType}
     */
    GetLoanChargeTimeType,

    /**
     * The GetLoanCurrency model constructor.
     * @property {module:model/GetLoanCurrency}
     */
    GetLoanCurrency,

    /**
     * The GetLoanFeeToIncomeAccountMappings model constructor.
     * @property {module:model/GetLoanFeeToIncomeAccountMappings}
     */
    GetLoanFeeToIncomeAccountMappings,

    /**
     * The GetLoanFundSourceAccount model constructor.
     * @property {module:model/GetLoanFundSourceAccount}
     */
    GetLoanFundSourceAccount,

    /**
     * The GetLoanIncomeFromFeeAccount model constructor.
     * @property {module:model/GetLoanIncomeFromFeeAccount}
     */
    GetLoanIncomeFromFeeAccount,

    /**
     * The GetLoanIncomeFromPenaltyAccount model constructor.
     * @property {module:model/GetLoanIncomeFromPenaltyAccount}
     */
    GetLoanIncomeFromPenaltyAccount,

    /**
     * The GetLoanInterestOnLoanAccount model constructor.
     * @property {module:model/GetLoanInterestOnLoanAccount}
     */
    GetLoanInterestOnLoanAccount,

    /**
     * The GetLoanOverpaymentLiabilityAccount model constructor.
     * @property {module:model/GetLoanOverpaymentLiabilityAccount}
     */
    GetLoanOverpaymentLiabilityAccount,

    /**
     * The GetLoanPaymentChannelToFundSourceMappings model constructor.
     * @property {module:model/GetLoanPaymentChannelToFundSourceMappings}
     */
    GetLoanPaymentChannelToFundSourceMappings,

    /**
     * The GetLoanPaymentType model constructor.
     * @property {module:model/GetLoanPaymentType}
     */
    GetLoanPaymentType,

    /**
     * The GetLoanPortfolioAccount model constructor.
     * @property {module:model/GetLoanPortfolioAccount}
     */
    GetLoanPortfolioAccount,

    /**
     * The GetLoanProductsAccountingMappingOptions model constructor.
     * @property {module:model/GetLoanProductsAccountingMappingOptions}
     */
    GetLoanProductsAccountingMappingOptions,

    /**
     * The GetLoanProductsAccountingRule model constructor.
     * @property {module:model/GetLoanProductsAccountingRule}
     */
    GetLoanProductsAccountingRule,

    /**
     * The GetLoanProductsAmortizationType model constructor.
     * @property {module:model/GetLoanProductsAmortizationType}
     */
    GetLoanProductsAmortizationType,

    /**
     * The GetLoanProductsAssetAccountOptions model constructor.
     * @property {module:model/GetLoanProductsAssetAccountOptions}
     */
    GetLoanProductsAssetAccountOptions,

    /**
     * The GetLoanProductsChargeAppliesTo model constructor.
     * @property {module:model/GetLoanProductsChargeAppliesTo}
     */
    GetLoanProductsChargeAppliesTo,

    /**
     * The GetLoanProductsChargeOptions model constructor.
     * @property {module:model/GetLoanProductsChargeOptions}
     */
    GetLoanProductsChargeOptions,

    /**
     * The GetLoanProductsCurrency model constructor.
     * @property {module:model/GetLoanProductsCurrency}
     */
    GetLoanProductsCurrency,

    /**
     * The GetLoanProductsCurrencyOptions model constructor.
     * @property {module:model/GetLoanProductsCurrencyOptions}
     */
    GetLoanProductsCurrencyOptions,

    /**
     * The GetLoanProductsDaysInYearTemplateType model constructor.
     * @property {module:model/GetLoanProductsDaysInYearTemplateType}
     */
    GetLoanProductsDaysInYearTemplateType,

    /**
     * The GetLoanProductsExpenseAccountOptions model constructor.
     * @property {module:model/GetLoanProductsExpenseAccountOptions}
     */
    GetLoanProductsExpenseAccountOptions,

    /**
     * The GetLoanProductsExpenseType model constructor.
     * @property {module:model/GetLoanProductsExpenseType}
     */
    GetLoanProductsExpenseType,

    /**
     * The GetLoanProductsIncomeAccountOptions model constructor.
     * @property {module:model/GetLoanProductsIncomeAccountOptions}
     */
    GetLoanProductsIncomeAccountOptions,

    /**
     * The GetLoanProductsIncomeType model constructor.
     * @property {module:model/GetLoanProductsIncomeType}
     */
    GetLoanProductsIncomeType,

    /**
     * The GetLoanProductsInterestRateFrequencyType model constructor.
     * @property {module:model/GetLoanProductsInterestRateFrequencyType}
     */
    GetLoanProductsInterestRateFrequencyType,

    /**
     * The GetLoanProductsInterestRateTemplateFrequencyType model constructor.
     * @property {module:model/GetLoanProductsInterestRateTemplateFrequencyType}
     */
    GetLoanProductsInterestRateTemplateFrequencyType,

    /**
     * The GetLoanProductsInterestRecalculationCompoundingFrequencyType model constructor.
     * @property {module:model/GetLoanProductsInterestRecalculationCompoundingFrequencyType}
     */
    GetLoanProductsInterestRecalculationCompoundingFrequencyType,

    /**
     * The GetLoanProductsInterestRecalculationCompoundingType model constructor.
     * @property {module:model/GetLoanProductsInterestRecalculationCompoundingType}
     */
    GetLoanProductsInterestRecalculationCompoundingType,

    /**
     * The GetLoanProductsInterestRecalculationData model constructor.
     * @property {module:model/GetLoanProductsInterestRecalculationData}
     */
    GetLoanProductsInterestRecalculationData,

    /**
     * The GetLoanProductsInterestRecalculationTemplateData model constructor.
     * @property {module:model/GetLoanProductsInterestRecalculationTemplateData}
     */
    GetLoanProductsInterestRecalculationTemplateData,

    /**
     * The GetLoanProductsInterestTemplateType model constructor.
     * @property {module:model/GetLoanProductsInterestTemplateType}
     */
    GetLoanProductsInterestTemplateType,

    /**
     * The GetLoanProductsInterestType model constructor.
     * @property {module:model/GetLoanProductsInterestType}
     */
    GetLoanProductsInterestType,

    /**
     * The GetLoanProductsLiabilityAccountOptions model constructor.
     * @property {module:model/GetLoanProductsLiabilityAccountOptions}
     */
    GetLoanProductsLiabilityAccountOptions,

    /**
     * The GetLoanProductsLiabilityTagId model constructor.
     * @property {module:model/GetLoanProductsLiabilityTagId}
     */
    GetLoanProductsLiabilityTagId,

    /**
     * The GetLoanProductsLiabilityType model constructor.
     * @property {module:model/GetLoanProductsLiabilityType}
     */
    GetLoanProductsLiabilityType,

    /**
     * The GetLoanProductsLiabilityUsage model constructor.
     * @property {module:model/GetLoanProductsLiabilityUsage}
     */
    GetLoanProductsLiabilityUsage,

    /**
     * The GetLoanProductsParamType model constructor.
     * @property {module:model/GetLoanProductsParamType}
     */
    GetLoanProductsParamType,

    /**
     * The GetLoanProductsPaymentTypeOptions model constructor.
     * @property {module:model/GetLoanProductsPaymentTypeOptions}
     */
    GetLoanProductsPaymentTypeOptions,

    /**
     * The GetLoanProductsPreClosureInterestCalculationStrategy model constructor.
     * @property {module:model/GetLoanProductsPreClosureInterestCalculationStrategy}
     */
    GetLoanProductsPreClosureInterestCalculationStrategy,

    /**
     * The GetLoanProductsPrincipalVariationsForBorrowerCycle model constructor.
     * @property {module:model/GetLoanProductsPrincipalVariationsForBorrowerCycle}
     */
    GetLoanProductsPrincipalVariationsForBorrowerCycle,

    /**
     * The GetLoanProductsProductIdResponse model constructor.
     * @property {module:model/GetLoanProductsProductIdResponse}
     */
    GetLoanProductsProductIdResponse,

    /**
     * The GetLoanProductsRepaymentFrequencyType model constructor.
     * @property {module:model/GetLoanProductsRepaymentFrequencyType}
     */
    GetLoanProductsRepaymentFrequencyType,

    /**
     * The GetLoanProductsRepaymentTemplateFrequencyType model constructor.
     * @property {module:model/GetLoanProductsRepaymentTemplateFrequencyType}
     */
    GetLoanProductsRepaymentTemplateFrequencyType,

    /**
     * The GetLoanProductsRescheduleStrategyType model constructor.
     * @property {module:model/GetLoanProductsRescheduleStrategyType}
     */
    GetLoanProductsRescheduleStrategyType,

    /**
     * The GetLoanProductsResponse model constructor.
     * @property {module:model/GetLoanProductsResponse}
     */
    GetLoanProductsResponse,

    /**
     * The GetLoanProductsTemplateCurrency model constructor.
     * @property {module:model/GetLoanProductsTemplateCurrency}
     */
    GetLoanProductsTemplateCurrency,

    /**
     * The GetLoanProductsTemplateResponse model constructor.
     * @property {module:model/GetLoanProductsTemplateResponse}
     */
    GetLoanProductsTemplateResponse,

    /**
     * The GetLoanProductsTransactionProcessingStrategyOptions model constructor.
     * @property {module:model/GetLoanProductsTransactionProcessingStrategyOptions}
     */
    GetLoanProductsTransactionProcessingStrategyOptions,

    /**
     * The GetLoanProductsValueConditionType model constructor.
     * @property {module:model/GetLoanProductsValueConditionType}
     */
    GetLoanProductsValueConditionType,

    /**
     * The GetLoanProductsValueConditionTypeOptions model constructor.
     * @property {module:model/GetLoanProductsValueConditionTypeOptions}
     */
    GetLoanProductsValueConditionTypeOptions,

    /**
     * The GetLoanTransfersInSuspenseAccount model constructor.
     * @property {module:model/GetLoanTransfersInSuspenseAccount}
     */
    GetLoanTransfersInSuspenseAccount,

    /**
     * The GetLoanWriteOffAccount model constructor.
     * @property {module:model/GetLoanWriteOffAccount}
     */
    GetLoanWriteOffAccount,

    /**
     * The GetLoansChargePaymentMode model constructor.
     * @property {module:model/GetLoansChargePaymentMode}
     */
    GetLoansChargePaymentMode,

    /**
     * The GetLoansCurrency model constructor.
     * @property {module:model/GetLoansCurrency}
     */
    GetLoansCurrency,

    /**
     * The GetLoansLoanIdAmortizationType model constructor.
     * @property {module:model/GetLoansLoanIdAmortizationType}
     */
    GetLoansLoanIdAmortizationType,

    /**
     * The GetLoansLoanIdChargeCalculationType model constructor.
     * @property {module:model/GetLoansLoanIdChargeCalculationType}
     */
    GetLoansLoanIdChargeCalculationType,

    /**
     * The GetLoansLoanIdChargePaymentMode model constructor.
     * @property {module:model/GetLoansLoanIdChargePaymentMode}
     */
    GetLoansLoanIdChargePaymentMode,

    /**
     * The GetLoansLoanIdChargeTimeType model constructor.
     * @property {module:model/GetLoansLoanIdChargeTimeType}
     */
    GetLoansLoanIdChargeTimeType,

    /**
     * The GetLoansLoanIdChargesChargeIdResponse model constructor.
     * @property {module:model/GetLoansLoanIdChargesChargeIdResponse}
     */
    GetLoansLoanIdChargesChargeIdResponse,

    /**
     * The GetLoansLoanIdChargesTemplateResponse model constructor.
     * @property {module:model/GetLoansLoanIdChargesTemplateResponse}
     */
    GetLoansLoanIdChargesTemplateResponse,

    /**
     * The GetLoansLoanIdCollateralsResponse model constructor.
     * @property {module:model/GetLoansLoanIdCollateralsResponse}
     */
    GetLoansLoanIdCollateralsResponse,

    /**
     * The GetLoansLoanIdCollateralsTemplateResponse model constructor.
     * @property {module:model/GetLoansLoanIdCollateralsTemplateResponse}
     */
    GetLoansLoanIdCollateralsTemplateResponse,

    /**
     * The GetLoansLoanIdCurrency model constructor.
     * @property {module:model/GetLoansLoanIdCurrency}
     */
    GetLoansLoanIdCurrency,

    /**
     * The GetLoansLoanIdDisbursementDetails model constructor.
     * @property {module:model/GetLoansLoanIdDisbursementDetails}
     */
    GetLoansLoanIdDisbursementDetails,

    /**
     * The GetLoansLoanIdFeeFrequency model constructor.
     * @property {module:model/GetLoansLoanIdFeeFrequency}
     */
    GetLoansLoanIdFeeFrequency,

    /**
     * The GetLoansLoanIdInterestCalculationPeriodType model constructor.
     * @property {module:model/GetLoansLoanIdInterestCalculationPeriodType}
     */
    GetLoansLoanIdInterestCalculationPeriodType,

    /**
     * The GetLoansLoanIdInterestRateFrequencyType model constructor.
     * @property {module:model/GetLoansLoanIdInterestRateFrequencyType}
     */
    GetLoansLoanIdInterestRateFrequencyType,

    /**
     * The GetLoansLoanIdInterestType model constructor.
     * @property {module:model/GetLoansLoanIdInterestType}
     */
    GetLoansLoanIdInterestType,

    /**
     * The GetLoansLoanIdLinkedAccount model constructor.
     * @property {module:model/GetLoansLoanIdLinkedAccount}
     */
    GetLoansLoanIdLinkedAccount,

    /**
     * The GetLoansLoanIdLoanType model constructor.
     * @property {module:model/GetLoansLoanIdLoanType}
     */
    GetLoansLoanIdLoanType,

    /**
     * The GetLoansLoanIdOverdueCharges model constructor.
     * @property {module:model/GetLoansLoanIdOverdueCharges}
     */
    GetLoansLoanIdOverdueCharges,

    /**
     * The GetLoansLoanIdRepaymentFrequencyType model constructor.
     * @property {module:model/GetLoansLoanIdRepaymentFrequencyType}
     */
    GetLoansLoanIdRepaymentFrequencyType,

    /**
     * The GetLoansLoanIdResponse model constructor.
     * @property {module:model/GetLoansLoanIdResponse}
     */
    GetLoansLoanIdResponse,

    /**
     * The GetLoansLoanIdStatus model constructor.
     * @property {module:model/GetLoansLoanIdStatus}
     */
    GetLoansLoanIdStatus,

    /**
     * The GetLoansLoanIdSummary model constructor.
     * @property {module:model/GetLoansLoanIdSummary}
     */
    GetLoansLoanIdSummary,

    /**
     * The GetLoansLoanIdTermPeriodFrequencyType model constructor.
     * @property {module:model/GetLoansLoanIdTermPeriodFrequencyType}
     */
    GetLoansLoanIdTermPeriodFrequencyType,

    /**
     * The GetLoansLoanIdTimeline model constructor.
     * @property {module:model/GetLoansLoanIdTimeline}
     */
    GetLoansLoanIdTimeline,

    /**
     * The GetLoansLoanIdTransactionsTemplateResponse model constructor.
     * @property {module:model/GetLoansLoanIdTransactionsTemplateResponse}
     */
    GetLoansLoanIdTransactionsTemplateResponse,

    /**
     * The GetLoansLoanIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetLoansLoanIdTransactionsTransactionIdResponse}
     */
    GetLoansLoanIdTransactionsTransactionIdResponse,

    /**
     * The GetLoansProductsDaysInMonthTemplateType model constructor.
     * @property {module:model/GetLoansProductsDaysInMonthTemplateType}
     */
    GetLoansProductsDaysInMonthTemplateType,

    /**
     * The GetLoansProductsDaysInMonthType model constructor.
     * @property {module:model/GetLoansProductsDaysInMonthType}
     */
    GetLoansProductsDaysInMonthType,

    /**
     * The GetLoansProductsDaysInYearType model constructor.
     * @property {module:model/GetLoansProductsDaysInYearType}
     */
    GetLoansProductsDaysInYearType,

    /**
     * The GetLoansProductsInterestCalculationPeriodType model constructor.
     * @property {module:model/GetLoansProductsInterestCalculationPeriodType}
     */
    GetLoansProductsInterestCalculationPeriodType,

    /**
     * The GetLoansResponse model constructor.
     * @property {module:model/GetLoansResponse}
     */
    GetLoansResponse,

    /**
     * The GetLoansTemplateProductOptions model constructor.
     * @property {module:model/GetLoansTemplateProductOptions}
     */
    GetLoansTemplateProductOptions,

    /**
     * The GetLoansTemplateResponse model constructor.
     * @property {module:model/GetLoansTemplateResponse}
     */
    GetLoansTemplateResponse,

    /**
     * The GetLoansTemplateTimeline model constructor.
     * @property {module:model/GetLoansTemplateTimeline}
     */
    GetLoansTemplateTimeline,

    /**
     * The GetLoansTotal model constructor.
     * @property {module:model/GetLoansTotal}
     */
    GetLoansTotal,

    /**
     * The GetLoansTransactionType model constructor.
     * @property {module:model/GetLoansTransactionType}
     */
    GetLoansTransactionType,

    /**
     * The GetLoansType model constructor.
     * @property {module:model/GetLoansType}
     */
    GetLoansType,

    /**
     * The GetLockPeriodTypeEnum model constructor.
     * @property {module:model/GetLockPeriodTypeEnum}
     */
    GetLockPeriodTypeEnum,

    /**
     * The GetMakerCheckerResponse model constructor.
     * @property {module:model/GetMakerCheckerResponse}
     */
    GetMakerCheckerResponse,

    /**
     * The GetMakerCheckersSearchTemplateResponse model constructor.
     * @property {module:model/GetMakerCheckersSearchTemplateResponse}
     */
    GetMakerCheckersSearchTemplateResponse,

    /**
     * The GetNotesNoteType model constructor.
     * @property {module:model/GetNotesNoteType}
     */
    GetNotesNoteType,

    /**
     * The GetOfficesResponse model constructor.
     * @property {module:model/GetOfficesResponse}
     */
    GetOfficesResponse,

    /**
     * The GetOfficesTemplateResponse model constructor.
     * @property {module:model/GetOfficesTemplateResponse}
     */
    GetOfficesTemplateResponse,

    /**
     * The GetPageItemsStandingInstructionSwagger model constructor.
     * @property {module:model/GetPageItemsStandingInstructionSwagger}
     */
    GetPageItemsStandingInstructionSwagger,

    /**
     * The GetPasswordPreferencesTemplateResponse model constructor.
     * @property {module:model/GetPasswordPreferencesTemplateResponse}
     */
    GetPasswordPreferencesTemplateResponse,

    /**
     * The GetPaymentTypesPaymentTypeIdResponse model constructor.
     * @property {module:model/GetPaymentTypesPaymentTypeIdResponse}
     */
    GetPaymentTypesPaymentTypeIdResponse,

    /**
     * The GetPaymentTypesResponse model constructor.
     * @property {module:model/GetPaymentTypesResponse}
     */
    GetPaymentTypesResponse,

    /**
     * The GetPermissionsResponse model constructor.
     * @property {module:model/GetPermissionsResponse}
     */
    GetPermissionsResponse,

    /**
     * The GetPocketData model constructor.
     * @property {module:model/GetPocketData}
     */
    GetPocketData,

    /**
     * The GetPocketLoanAccounts model constructor.
     * @property {module:model/GetPocketLoanAccounts}
     */
    GetPocketLoanAccounts,

    /**
     * The GetPocketSavingAccounts model constructor.
     * @property {module:model/GetPocketSavingAccounts}
     */
    GetPocketSavingAccounts,

    /**
     * The GetPriorityOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetPriorityOptionsResponseStandingInstructionSwagger}
     */
    GetPriorityOptionsResponseStandingInstructionSwagger,

    /**
     * The GetPriorityStandingInstructionSwagger model constructor.
     * @property {module:model/GetPriorityStandingInstructionSwagger}
     */
    GetPriorityStandingInstructionSwagger,

    /**
     * The GetProductsAccountingMappingOptions model constructor.
     * @property {module:model/GetProductsAccountingMappingOptions}
     */
    GetProductsAccountingMappingOptions,

    /**
     * The GetProductsAccountingMappings model constructor.
     * @property {module:model/GetProductsAccountingMappings}
     */
    GetProductsAccountingMappings,

    /**
     * The GetProductsAccountingRule model constructor.
     * @property {module:model/GetProductsAccountingRule}
     */
    GetProductsAccountingRule,

    /**
     * The GetProductsAssetAccountOptions model constructor.
     * @property {module:model/GetProductsAssetAccountOptions}
     */
    GetProductsAssetAccountOptions,

    /**
     * The GetProductsCharges model constructor.
     * @property {module:model/GetProductsCharges}
     */
    GetProductsCharges,

    /**
     * The GetProductsCurrency model constructor.
     * @property {module:model/GetProductsCurrency}
     */
    GetProductsCurrency,

    /**
     * The GetProductsEquityAccountOptions model constructor.
     * @property {module:model/GetProductsEquityAccountOptions}
     */
    GetProductsEquityAccountOptions,

    /**
     * The GetProductsIncomeAccountOptions model constructor.
     * @property {module:model/GetProductsIncomeAccountOptions}
     */
    GetProductsIncomeAccountOptions,

    /**
     * The GetProductsLiabilityAccountOptions model constructor.
     * @property {module:model/GetProductsLiabilityAccountOptions}
     */
    GetProductsLiabilityAccountOptions,

    /**
     * The GetProductsLiabilityType model constructor.
     * @property {module:model/GetProductsLiabilityType}
     */
    GetProductsLiabilityType,

    /**
     * The GetProductsLiabilityUsage model constructor.
     * @property {module:model/GetProductsLiabilityUsage}
     */
    GetProductsLiabilityUsage,

    /**
     * The GetProductsMarketPrice model constructor.
     * @property {module:model/GetProductsMarketPrice}
     */
    GetProductsMarketPrice,

    /**
     * The GetProductsMinimumActivePeriodFrequencyTypeOptions model constructor.
     * @property {module:model/GetProductsMinimumActivePeriodFrequencyTypeOptions}
     */
    GetProductsMinimumActivePeriodFrequencyTypeOptions,

    /**
     * The GetProductsPageItems model constructor.
     * @property {module:model/GetProductsPageItems}
     */
    GetProductsPageItems,

    /**
     * The GetProductsTagId model constructor.
     * @property {module:model/GetProductsTagId}
     */
    GetProductsTagId,

    /**
     * The GetProductsTypeProductIdResponse model constructor.
     * @property {module:model/GetProductsTypeProductIdResponse}
     */
    GetProductsTypeProductIdResponse,

    /**
     * The GetProductsTypeResponse model constructor.
     * @property {module:model/GetProductsTypeResponse}
     */
    GetProductsTypeResponse,

    /**
     * The GetProvisioningCriteriaCriteriaIdResponse model constructor.
     * @property {module:model/GetProvisioningCriteriaCriteriaIdResponse}
     */
    GetProvisioningCriteriaCriteriaIdResponse,

    /**
     * The GetProvisioningCriteriaResponse model constructor.
     * @property {module:model/GetProvisioningCriteriaResponse}
     */
    GetProvisioningCriteriaResponse,

    /**
     * The GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger}
     */
    GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger,

    /**
     * The GetRecurrenceFrequencyStandingInstructionSwagger model constructor.
     * @property {module:model/GetRecurrenceFrequencyStandingInstructionSwagger}
     */
    GetRecurrenceFrequencyStandingInstructionSwagger,

    /**
     * The GetRecurrenceTypeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger}
     */
    GetRecurrenceTypeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetRecurrenceTypeStandingInstructionSwagger model constructor.
     * @property {module:model/GetRecurrenceTypeStandingInstructionSwagger}
     */
    GetRecurrenceTypeStandingInstructionSwagger,

    /**
     * The GetRecurringCurrency model constructor.
     * @property {module:model/GetRecurringCurrency}
     */
    GetRecurringCurrency,

    /**
     * The GetRecurringDepositAccountsAccountChart model constructor.
     * @property {module:model/GetRecurringDepositAccountsAccountChart}
     */
    GetRecurringDepositAccountsAccountChart,

    /**
     * The GetRecurringDepositAccountsAccountChartCurrency model constructor.
     * @property {module:model/GetRecurringDepositAccountsAccountChartCurrency}
     */
    GetRecurringDepositAccountsAccountChartCurrency,

    /**
     * The GetRecurringDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/GetRecurringDepositAccountsAccountIdResponse}
     */
    GetRecurringDepositAccountsAccountIdResponse,

    /**
     * The GetRecurringDepositAccountsChartSlabs model constructor.
     * @property {module:model/GetRecurringDepositAccountsChartSlabs}
     */
    GetRecurringDepositAccountsChartSlabs,

    /**
     * The GetRecurringDepositAccountsCurrency model constructor.
     * @property {module:model/GetRecurringDepositAccountsCurrency}
     */
    GetRecurringDepositAccountsCurrency,

    /**
     * The GetRecurringDepositAccountsDepositPeriodFrequency model constructor.
     * @property {module:model/GetRecurringDepositAccountsDepositPeriodFrequency}
     */
    GetRecurringDepositAccountsDepositPeriodFrequency,

    /**
     * The GetRecurringDepositAccountsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetRecurringDepositAccountsInterestCalculationDaysInYearType}
     */
    GetRecurringDepositAccountsInterestCalculationDaysInYearType,

    /**
     * The GetRecurringDepositAccountsInterestCalculationType model constructor.
     * @property {module:model/GetRecurringDepositAccountsInterestCalculationType}
     */
    GetRecurringDepositAccountsInterestCalculationType,

    /**
     * The GetRecurringDepositAccountsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetRecurringDepositAccountsInterestCompoundingPeriodType}
     */
    GetRecurringDepositAccountsInterestCompoundingPeriodType,

    /**
     * The GetRecurringDepositAccountsInterestPostingPeriodType model constructor.
     * @property {module:model/GetRecurringDepositAccountsInterestPostingPeriodType}
     */
    GetRecurringDepositAccountsInterestPostingPeriodType,

    /**
     * The GetRecurringDepositAccountsMaxDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositAccountsMaxDepositTermType}
     */
    GetRecurringDepositAccountsMaxDepositTermType,

    /**
     * The GetRecurringDepositAccountsMinDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositAccountsMinDepositTermType}
     */
    GetRecurringDepositAccountsMinDepositTermType,

    /**
     * The GetRecurringDepositAccountsPeriodType model constructor.
     * @property {module:model/GetRecurringDepositAccountsPeriodType}
     */
    GetRecurringDepositAccountsPeriodType,

    /**
     * The GetRecurringDepositAccountsPeriodTypes model constructor.
     * @property {module:model/GetRecurringDepositAccountsPeriodTypes}
     */
    GetRecurringDepositAccountsPeriodTypes,

    /**
     * The GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse model constructor.
     * @property {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse}
     */
    GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse,

    /**
     * The GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse}
     */
    GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse,

    /**
     * The GetRecurringDepositAccountsRecurringDepositFrequencyType model constructor.
     * @property {module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType}
     */
    GetRecurringDepositAccountsRecurringDepositFrequencyType,

    /**
     * The GetRecurringDepositAccountsResponse model constructor.
     * @property {module:model/GetRecurringDepositAccountsResponse}
     */
    GetRecurringDepositAccountsResponse,

    /**
     * The GetRecurringDepositAccountsStatus model constructor.
     * @property {module:model/GetRecurringDepositAccountsStatus}
     */
    GetRecurringDepositAccountsStatus,

    /**
     * The GetRecurringDepositAccountsSummary model constructor.
     * @property {module:model/GetRecurringDepositAccountsSummary}
     */
    GetRecurringDepositAccountsSummary,

    /**
     * The GetRecurringDepositAccountsTemplateResponse model constructor.
     * @property {module:model/GetRecurringDepositAccountsTemplateResponse}
     */
    GetRecurringDepositAccountsTemplateResponse,

    /**
     * The GetRecurringDepositAccountsTimeline model constructor.
     * @property {module:model/GetRecurringDepositAccountsTimeline}
     */
    GetRecurringDepositAccountsTimeline,

    /**
     * The GetRecurringDepositProductsAccountingRule model constructor.
     * @property {module:model/GetRecurringDepositProductsAccountingRule}
     */
    GetRecurringDepositProductsAccountingRule,

    /**
     * The GetRecurringDepositProductsCurrency model constructor.
     * @property {module:model/GetRecurringDepositProductsCurrency}
     */
    GetRecurringDepositProductsCurrency,

    /**
     * The GetRecurringDepositProductsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType}
     */
    GetRecurringDepositProductsInterestCalculationDaysInYearType,

    /**
     * The GetRecurringDepositProductsInterestCalculationType model constructor.
     * @property {module:model/GetRecurringDepositProductsInterestCalculationType}
     */
    GetRecurringDepositProductsInterestCalculationType,

    /**
     * The GetRecurringDepositProductsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetRecurringDepositProductsInterestCompoundingPeriodType}
     */
    GetRecurringDepositProductsInterestCompoundingPeriodType,

    /**
     * The GetRecurringDepositProductsInterestPostingPeriodType model constructor.
     * @property {module:model/GetRecurringDepositProductsInterestPostingPeriodType}
     */
    GetRecurringDepositProductsInterestPostingPeriodType,

    /**
     * The GetRecurringDepositProductsMaxDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositProductsMaxDepositTermType}
     */
    GetRecurringDepositProductsMaxDepositTermType,

    /**
     * The GetRecurringDepositProductsMinDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositProductsMinDepositTermType}
     */
    GetRecurringDepositProductsMinDepositTermType,

    /**
     * The GetRecurringDepositProductsProductIdAccountingMappings model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdAccountingMappings}
     */
    GetRecurringDepositProductsProductIdAccountingMappings,

    /**
     * The GetRecurringDepositProductsProductIdActiveChart model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdActiveChart}
     */
    GetRecurringDepositProductsProductIdActiveChart,

    /**
     * The GetRecurringDepositProductsProductIdChartSlabs model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdChartSlabs}
     */
    GetRecurringDepositProductsProductIdChartSlabs,

    /**
     * The GetRecurringDepositProductsProductIdCurrency model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdCurrency}
     */
    GetRecurringDepositProductsProductIdCurrency,

    /**
     * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings}
     */
    GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings,

    /**
     * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge}
     */
    GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge,

    /**
     * The GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount}
     */
    GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount,

    /**
     * The GetRecurringDepositProductsProductIdIncomeFromFeeAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdIncomeFromFeeAccount}
     */
    GetRecurringDepositProductsProductIdIncomeFromFeeAccount,

    /**
     * The GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount}
     */
    GetRecurringDepositProductsProductIdIncomeFromPenaltyAccount,

    /**
     * The GetRecurringDepositProductsProductIdInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType}
     */
    GetRecurringDepositProductsProductIdInterestCompoundingPeriodType,

    /**
     * The GetRecurringDepositProductsProductIdInterestOnSavingsAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdInterestOnSavingsAccount}
     */
    GetRecurringDepositProductsProductIdInterestOnSavingsAccount,

    /**
     * The GetRecurringDepositProductsProductIdMaxDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdMaxDepositTermType}
     */
    GetRecurringDepositProductsProductIdMaxDepositTermType,

    /**
     * The GetRecurringDepositProductsProductIdMinDepositTermType model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdMinDepositTermType}
     */
    GetRecurringDepositProductsProductIdMinDepositTermType,

    /**
     * The GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings}
     */
    GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings,

    /**
     * The GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge}
     */
    GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge,

    /**
     * The GetRecurringDepositProductsProductIdPeriodType model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdPeriodType}
     */
    GetRecurringDepositProductsProductIdPeriodType,

    /**
     * The GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType}
     */
    GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType,

    /**
     * The GetRecurringDepositProductsProductIdResponse model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdResponse}
     */
    GetRecurringDepositProductsProductIdResponse,

    /**
     * The GetRecurringDepositProductsProductIdSavingsControlAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdSavingsControlAccount}
     */
    GetRecurringDepositProductsProductIdSavingsControlAccount,

    /**
     * The GetRecurringDepositProductsProductIdSavingsReferenceAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdSavingsReferenceAccount}
     */
    GetRecurringDepositProductsProductIdSavingsReferenceAccount,

    /**
     * The GetRecurringDepositProductsProductIdTransfersInSuspenseAccount model constructor.
     * @property {module:model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount}
     */
    GetRecurringDepositProductsProductIdTransfersInSuspenseAccount,

    /**
     * The GetRecurringDepositProductsRecurringDepositFrequencyType model constructor.
     * @property {module:model/GetRecurringDepositProductsRecurringDepositFrequencyType}
     */
    GetRecurringDepositProductsRecurringDepositFrequencyType,

    /**
     * The GetRecurringDepositProductsResponse model constructor.
     * @property {module:model/GetRecurringDepositProductsResponse}
     */
    GetRecurringDepositProductsResponse,

    /**
     * The GetRecurringPaymentDetailData model constructor.
     * @property {module:model/GetRecurringPaymentDetailData}
     */
    GetRecurringPaymentDetailData,

    /**
     * The GetRecurringPaymentType model constructor.
     * @property {module:model/GetRecurringPaymentType}
     */
    GetRecurringPaymentType,

    /**
     * The GetRecurringProductOptions model constructor.
     * @property {module:model/GetRecurringProductOptions}
     */
    GetRecurringProductOptions,

    /**
     * The GetRecurringTransactionType model constructor.
     * @property {module:model/GetRecurringTransactionType}
     */
    GetRecurringTransactionType,

    /**
     * The GetRecurringTransactionsCurrency model constructor.
     * @property {module:model/GetRecurringTransactionsCurrency}
     */
    GetRecurringTransactionsCurrency,

    /**
     * The GetRecurringTransactionsTransactionType model constructor.
     * @property {module:model/GetRecurringTransactionsTransactionType}
     */
    GetRecurringTransactionsTransactionType,

    /**
     * The GetReportMailingJobsResponse model constructor.
     * @property {module:model/GetReportMailingJobsResponse}
     */
    GetReportMailingJobsResponse,

    /**
     * The GetReportMailingJobsTemplate model constructor.
     * @property {module:model/GetReportMailingJobsTemplate}
     */
    GetReportMailingJobsTemplate,

    /**
     * The GetReportNameResponse model constructor.
     * @property {module:model/GetReportNameResponse}
     */
    GetReportNameResponse,

    /**
     * The GetReportsResponse model constructor.
     * @property {module:model/GetReportsResponse}
     */
    GetReportsResponse,

    /**
     * The GetReportsTemplateResponse model constructor.
     * @property {module:model/GetReportsTemplateResponse}
     */
    GetReportsTemplateResponse,

    /**
     * The GetResourceTypeResourceIdNotesNoteIdResponse model constructor.
     * @property {module:model/GetResourceTypeResourceIdNotesNoteIdResponse}
     */
    GetResourceTypeResourceIdNotesNoteIdResponse,

    /**
     * The GetResourceTypeResourceIdNotesResponse model constructor.
     * @property {module:model/GetResourceTypeResourceIdNotesResponse}
     */
    GetResourceTypeResourceIdNotesResponse,

    /**
     * The GetRolesResponse model constructor.
     * @property {module:model/GetRolesResponse}
     */
    GetRolesResponse,

    /**
     * The GetRolesRoleIdPermissionsResponse model constructor.
     * @property {module:model/GetRolesRoleIdPermissionsResponse}
     */
    GetRolesRoleIdPermissionsResponse,

    /**
     * The GetRolesRoleIdPermissionsResponsePermissionData model constructor.
     * @property {module:model/GetRolesRoleIdPermissionsResponsePermissionData}
     */
    GetRolesRoleIdPermissionsResponsePermissionData,

    /**
     * The GetRolesRoleIdResponse model constructor.
     * @property {module:model/GetRolesRoleIdResponse}
     */
    GetRolesRoleIdResponse,

    /**
     * The GetRunReportColumnHeaders model constructor.
     * @property {module:model/GetRunReportColumnHeaders}
     */
    GetRunReportColumnHeaders,

    /**
     * The GetRunReportResponse model constructor.
     * @property {module:model/GetRunReportResponse}
     */
    GetRunReportResponse,

    /**
     * The GetSavingsAccountsAccountIdResponse model constructor.
     * @property {module:model/GetSavingsAccountsAccountIdResponse}
     */
    GetSavingsAccountsAccountIdResponse,

    /**
     * The GetSavingsAccountsResponse model constructor.
     * @property {module:model/GetSavingsAccountsResponse}
     */
    GetSavingsAccountsResponse,

    /**
     * The GetSavingsAccountsSavingsAccountIdChargesResponse model constructor.
     * @property {module:model/GetSavingsAccountsSavingsAccountIdChargesResponse}
     */
    GetSavingsAccountsSavingsAccountIdChargesResponse,

    /**
     * The GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model constructor.
     * @property {module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse,

    /**
     * The GetSavingsAccountsSavingsAccountIdChargesTemplateResponse model constructor.
     * @property {module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse}
     */
    GetSavingsAccountsSavingsAccountIdChargesTemplateResponse,

    /**
     * The GetSavingsAccountsSummary model constructor.
     * @property {module:model/GetSavingsAccountsSummary}
     */
    GetSavingsAccountsSummary,

    /**
     * The GetSavingsAccountsTemplateResponse model constructor.
     * @property {module:model/GetSavingsAccountsTemplateResponse}
     */
    GetSavingsAccountsTemplateResponse,

    /**
     * The GetSavingsAssetLiabilityType model constructor.
     * @property {module:model/GetSavingsAssetLiabilityType}
     */
    GetSavingsAssetLiabilityType,

    /**
     * The GetSavingsChargeCalculationType model constructor.
     * @property {module:model/GetSavingsChargeCalculationType}
     */
    GetSavingsChargeCalculationType,

    /**
     * The GetSavingsChargePaymentMode model constructor.
     * @property {module:model/GetSavingsChargePaymentMode}
     */
    GetSavingsChargePaymentMode,

    /**
     * The GetSavingsChargeTimeType model constructor.
     * @property {module:model/GetSavingsChargeTimeType}
     */
    GetSavingsChargeTimeType,

    /**
     * The GetSavingsChargesChargeTimeType model constructor.
     * @property {module:model/GetSavingsChargesChargeTimeType}
     */
    GetSavingsChargesChargeTimeType,

    /**
     * The GetSavingsChargesOptions model constructor.
     * @property {module:model/GetSavingsChargesOptions}
     */
    GetSavingsChargesOptions,

    /**
     * The GetSavingsCurrency model constructor.
     * @property {module:model/GetSavingsCurrency}
     */
    GetSavingsCurrency,

    /**
     * The GetSavingsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetSavingsInterestCalculationDaysInYearType}
     */
    GetSavingsInterestCalculationDaysInYearType,

    /**
     * The GetSavingsInterestCalculationType model constructor.
     * @property {module:model/GetSavingsInterestCalculationType}
     */
    GetSavingsInterestCalculationType,

    /**
     * The GetSavingsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetSavingsInterestCompoundingPeriodType}
     */
    GetSavingsInterestCompoundingPeriodType,

    /**
     * The GetSavingsInterestPostingPeriodType model constructor.
     * @property {module:model/GetSavingsInterestPostingPeriodType}
     */
    GetSavingsInterestPostingPeriodType,

    /**
     * The GetSavingsPageItems model constructor.
     * @property {module:model/GetSavingsPageItems}
     */
    GetSavingsPageItems,

    /**
     * The GetSavingsProductOptions model constructor.
     * @property {module:model/GetSavingsProductOptions}
     */
    GetSavingsProductOptions,

    /**
     * The GetSavingsProductsAccountingMappingOptions model constructor.
     * @property {module:model/GetSavingsProductsAccountingMappingOptions}
     */
    GetSavingsProductsAccountingMappingOptions,

    /**
     * The GetSavingsProductsAccountingMappings model constructor.
     * @property {module:model/GetSavingsProductsAccountingMappings}
     */
    GetSavingsProductsAccountingMappings,

    /**
     * The GetSavingsProductsAccountingRule model constructor.
     * @property {module:model/GetSavingsProductsAccountingRule}
     */
    GetSavingsProductsAccountingRule,

    /**
     * The GetSavingsProductsAssetAccountOptions model constructor.
     * @property {module:model/GetSavingsProductsAssetAccountOptions}
     */
    GetSavingsProductsAssetAccountOptions,

    /**
     * The GetSavingsProductsChargeAppliesTo model constructor.
     * @property {module:model/GetSavingsProductsChargeAppliesTo}
     */
    GetSavingsProductsChargeAppliesTo,

    /**
     * The GetSavingsProductsChargeOptions model constructor.
     * @property {module:model/GetSavingsProductsChargeOptions}
     */
    GetSavingsProductsChargeOptions,

    /**
     * The GetSavingsProductsExpenseAccountOptions model constructor.
     * @property {module:model/GetSavingsProductsExpenseAccountOptions}
     */
    GetSavingsProductsExpenseAccountOptions,

    /**
     * The GetSavingsProductsExpenseType model constructor.
     * @property {module:model/GetSavingsProductsExpenseType}
     */
    GetSavingsProductsExpenseType,

    /**
     * The GetSavingsProductsFeeToIncomeAccountMappings model constructor.
     * @property {module:model/GetSavingsProductsFeeToIncomeAccountMappings}
     */
    GetSavingsProductsFeeToIncomeAccountMappings,

    /**
     * The GetSavingsProductsFeeToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetSavingsProductsFeeToIncomeAccountMappingsCharge}
     */
    GetSavingsProductsFeeToIncomeAccountMappingsCharge,

    /**
     * The GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount model constructor.
     * @property {module:model/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount}
     */
    GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount,

    /**
     * The GetSavingsProductsFundSourceAccount model constructor.
     * @property {module:model/GetSavingsProductsFundSourceAccount}
     */
    GetSavingsProductsFundSourceAccount,

    /**
     * The GetSavingsProductsIncomeAccountOptions model constructor.
     * @property {module:model/GetSavingsProductsIncomeAccountOptions}
     */
    GetSavingsProductsIncomeAccountOptions,

    /**
     * The GetSavingsProductsIncomeFromFeeAccount model constructor.
     * @property {module:model/GetSavingsProductsIncomeFromFeeAccount}
     */
    GetSavingsProductsIncomeFromFeeAccount,

    /**
     * The GetSavingsProductsIncomeFromPenaltyAccount model constructor.
     * @property {module:model/GetSavingsProductsIncomeFromPenaltyAccount}
     */
    GetSavingsProductsIncomeFromPenaltyAccount,

    /**
     * The GetSavingsProductsIncomeType model constructor.
     * @property {module:model/GetSavingsProductsIncomeType}
     */
    GetSavingsProductsIncomeType,

    /**
     * The GetSavingsProductsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetSavingsProductsInterestCalculationDaysInYearType}
     */
    GetSavingsProductsInterestCalculationDaysInYearType,

    /**
     * The GetSavingsProductsInterestCalculationType model constructor.
     * @property {module:model/GetSavingsProductsInterestCalculationType}
     */
    GetSavingsProductsInterestCalculationType,

    /**
     * The GetSavingsProductsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetSavingsProductsInterestCompoundingPeriodType}
     */
    GetSavingsProductsInterestCompoundingPeriodType,

    /**
     * The GetSavingsProductsInterestOnSavingsAccount model constructor.
     * @property {module:model/GetSavingsProductsInterestOnSavingsAccount}
     */
    GetSavingsProductsInterestOnSavingsAccount,

    /**
     * The GetSavingsProductsInterestPostingPeriodType model constructor.
     * @property {module:model/GetSavingsProductsInterestPostingPeriodType}
     */
    GetSavingsProductsInterestPostingPeriodType,

    /**
     * The GetSavingsProductsLiabilityAccountOptions model constructor.
     * @property {module:model/GetSavingsProductsLiabilityAccountOptions}
     */
    GetSavingsProductsLiabilityAccountOptions,

    /**
     * The GetSavingsProductsLiabilityTagId model constructor.
     * @property {module:model/GetSavingsProductsLiabilityTagId}
     */
    GetSavingsProductsLiabilityTagId,

    /**
     * The GetSavingsProductsLiabilityType model constructor.
     * @property {module:model/GetSavingsProductsLiabilityType}
     */
    GetSavingsProductsLiabilityType,

    /**
     * The GetSavingsProductsLiabilityUsage model constructor.
     * @property {module:model/GetSavingsProductsLiabilityUsage}
     */
    GetSavingsProductsLiabilityUsage,

    /**
     * The GetSavingsProductsLockinPeriodFrequencyTypeOptions model constructor.
     * @property {module:model/GetSavingsProductsLockinPeriodFrequencyTypeOptions}
     */
    GetSavingsProductsLockinPeriodFrequencyTypeOptions,

    /**
     * The GetSavingsProductsPaymentChannelToFundSourceMappings model constructor.
     * @property {module:model/GetSavingsProductsPaymentChannelToFundSourceMappings}
     */
    GetSavingsProductsPaymentChannelToFundSourceMappings,

    /**
     * The GetSavingsProductsPaymentType model constructor.
     * @property {module:model/GetSavingsProductsPaymentType}
     */
    GetSavingsProductsPaymentType,

    /**
     * The GetSavingsProductsPaymentTypeOptions model constructor.
     * @property {module:model/GetSavingsProductsPaymentTypeOptions}
     */
    GetSavingsProductsPaymentTypeOptions,

    /**
     * The GetSavingsProductsPenaltyToIncomeAccountMappings model constructor.
     * @property {module:model/GetSavingsProductsPenaltyToIncomeAccountMappings}
     */
    GetSavingsProductsPenaltyToIncomeAccountMappings,

    /**
     * The GetSavingsProductsPenaltyToIncomeAccountMappingsCharge model constructor.
     * @property {module:model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge}
     */
    GetSavingsProductsPenaltyToIncomeAccountMappingsCharge,

    /**
     * The GetSavingsProductsProductIdResponse model constructor.
     * @property {module:model/GetSavingsProductsProductIdResponse}
     */
    GetSavingsProductsProductIdResponse,

    /**
     * The GetSavingsProductsResponse model constructor.
     * @property {module:model/GetSavingsProductsResponse}
     */
    GetSavingsProductsResponse,

    /**
     * The GetSavingsProductsSavingsControlAccount model constructor.
     * @property {module:model/GetSavingsProductsSavingsControlAccount}
     */
    GetSavingsProductsSavingsControlAccount,

    /**
     * The GetSavingsProductsSavingsReferenceAccount model constructor.
     * @property {module:model/GetSavingsProductsSavingsReferenceAccount}
     */
    GetSavingsProductsSavingsReferenceAccount,

    /**
     * The GetSavingsProductsTemplateAccountingRule model constructor.
     * @property {module:model/GetSavingsProductsTemplateAccountingRule}
     */
    GetSavingsProductsTemplateAccountingRule,

    /**
     * The GetSavingsProductsTemplateResponse model constructor.
     * @property {module:model/GetSavingsProductsTemplateResponse}
     */
    GetSavingsProductsTemplateResponse,

    /**
     * The GetSavingsProductsTransfersInSuspenseAccount model constructor.
     * @property {module:model/GetSavingsProductsTransfersInSuspenseAccount}
     */
    GetSavingsProductsTransfersInSuspenseAccount,

    /**
     * The GetSavingsProductsWithdrawalFeeTypeOptions model constructor.
     * @property {module:model/GetSavingsProductsWithdrawalFeeTypeOptions}
     */
    GetSavingsProductsWithdrawalFeeTypeOptions,

    /**
     * The GetSavingsStatus model constructor.
     * @property {module:model/GetSavingsStatus}
     */
    GetSavingsStatus,

    /**
     * The GetSavingsSummary model constructor.
     * @property {module:model/GetSavingsSummary}
     */
    GetSavingsSummary,

    /**
     * The GetSavingsTimeline model constructor.
     * @property {module:model/GetSavingsTimeline}
     */
    GetSavingsTimeline,

    /**
     * The GetSchedulerResponse model constructor.
     * @property {module:model/GetSchedulerResponse}
     */
    GetSchedulerResponse,

    /**
     * The GetSearchResponse model constructor.
     * @property {module:model/GetSearchResponse}
     */
    GetSearchResponse,

    /**
     * The GetSelfBeneficiariesAccountOptions model constructor.
     * @property {module:model/GetSelfBeneficiariesAccountOptions}
     */
    GetSelfBeneficiariesAccountOptions,

    /**
     * The GetSelfBeneficiariesTPTResponse model constructor.
     * @property {module:model/GetSelfBeneficiariesTPTResponse}
     */
    GetSelfBeneficiariesTPTResponse,

    /**
     * The GetSelfBeneficiariesTPTTemplateResponse model constructor.
     * @property {module:model/GetSelfBeneficiariesTPTTemplateResponse}
     */
    GetSelfBeneficiariesTPTTemplateResponse,

    /**
     * The GetSelfClientsChargeCalculationType model constructor.
     * @property {module:model/GetSelfClientsChargeCalculationType}
     */
    GetSelfClientsChargeCalculationType,

    /**
     * The GetSelfClientsChargeTimeType model constructor.
     * @property {module:model/GetSelfClientsChargeTimeType}
     */
    GetSelfClientsChargeTimeType,

    /**
     * The GetSelfClientsChargesPageItems model constructor.
     * @property {module:model/GetSelfClientsChargesPageItems}
     */
    GetSelfClientsChargesPageItems,

    /**
     * The GetSelfClientsClientIdAccountsResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdAccountsResponse}
     */
    GetSelfClientsClientIdAccountsResponse,

    /**
     * The GetSelfClientsClientIdChargesChargeIdResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdChargesChargeIdResponse}
     */
    GetSelfClientsClientIdChargesChargeIdResponse,

    /**
     * The GetSelfClientsClientIdChargesResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdChargesResponse}
     */
    GetSelfClientsClientIdChargesResponse,

    /**
     * The GetSelfClientsClientIdResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdResponse}
     */
    GetSelfClientsClientIdResponse,

    /**
     * The GetSelfClientsClientIdTransactionsPageItems model constructor.
     * @property {module:model/GetSelfClientsClientIdTransactionsPageItems}
     */
    GetSelfClientsClientIdTransactionsPageItems,

    /**
     * The GetSelfClientsClientIdTransactionsResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdTransactionsResponse}
     */
    GetSelfClientsClientIdTransactionsResponse,

    /**
     * The GetSelfClientsClientIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse}
     */
    GetSelfClientsClientIdTransactionsTransactionIdResponse,

    /**
     * The GetSelfClientsClientIdTransactionsType model constructor.
     * @property {module:model/GetSelfClientsClientIdTransactionsType}
     */
    GetSelfClientsClientIdTransactionsType,

    /**
     * The GetSelfClientsLoanAccounts model constructor.
     * @property {module:model/GetSelfClientsLoanAccounts}
     */
    GetSelfClientsLoanAccounts,

    /**
     * The GetSelfClientsLoanAccountsStatus model constructor.
     * @property {module:model/GetSelfClientsLoanAccountsStatus}
     */
    GetSelfClientsLoanAccountsStatus,

    /**
     * The GetSelfClientsLoanAccountsType model constructor.
     * @property {module:model/GetSelfClientsLoanAccountsType}
     */
    GetSelfClientsLoanAccountsType,

    /**
     * The GetSelfClientsPageItems model constructor.
     * @property {module:model/GetSelfClientsPageItems}
     */
    GetSelfClientsPageItems,

    /**
     * The GetSelfClientsResponse model constructor.
     * @property {module:model/GetSelfClientsResponse}
     */
    GetSelfClientsResponse,

    /**
     * The GetSelfClientsSavingsAccounts model constructor.
     * @property {module:model/GetSelfClientsSavingsAccounts}
     */
    GetSelfClientsSavingsAccounts,

    /**
     * The GetSelfClientsSavingsAccountsCurrency model constructor.
     * @property {module:model/GetSelfClientsSavingsAccountsCurrency}
     */
    GetSelfClientsSavingsAccountsCurrency,

    /**
     * The GetSelfClientsSavingsAccountsStatus model constructor.
     * @property {module:model/GetSelfClientsSavingsAccountsStatus}
     */
    GetSelfClientsSavingsAccountsStatus,

    /**
     * The GetSelfClientsStatus model constructor.
     * @property {module:model/GetSelfClientsStatus}
     */
    GetSelfClientsStatus,

    /**
     * The GetSelfClientsTimeline model constructor.
     * @property {module:model/GetSelfClientsTimeline}
     */
    GetSelfClientsTimeline,

    /**
     * The GetSelfLoansChargeCalculationType model constructor.
     * @property {module:model/GetSelfLoansChargeCalculationType}
     */
    GetSelfLoansChargeCalculationType,

    /**
     * The GetSelfLoansChargeTimeType model constructor.
     * @property {module:model/GetSelfLoansChargeTimeType}
     */
    GetSelfLoansChargeTimeType,

    /**
     * The GetSelfLoansLoanIdChargesResponse model constructor.
     * @property {module:model/GetSelfLoansLoanIdChargesResponse}
     */
    GetSelfLoansLoanIdChargesResponse,

    /**
     * The GetSelfLoansLoanIdResponse model constructor.
     * @property {module:model/GetSelfLoansLoanIdResponse}
     */
    GetSelfLoansLoanIdResponse,

    /**
     * The GetSelfLoansLoanIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetSelfLoansLoanIdTransactionsTransactionIdResponse}
     */
    GetSelfLoansLoanIdTransactionsTransactionIdResponse,

    /**
     * The GetSelfLoansLoanIdTransactionsType model constructor.
     * @property {module:model/GetSelfLoansLoanIdTransactionsType}
     */
    GetSelfLoansLoanIdTransactionsType,

    /**
     * The GetSelfLoansProductOptions model constructor.
     * @property {module:model/GetSelfLoansProductOptions}
     */
    GetSelfLoansProductOptions,

    /**
     * The GetSelfLoansTemplateResponse model constructor.
     * @property {module:model/GetSelfLoansTemplateResponse}
     */
    GetSelfLoansTemplateResponse,

    /**
     * The GetSelfLoansTimeline model constructor.
     * @property {module:model/GetSelfLoansTimeline}
     */
    GetSelfLoansTimeline,

    /**
     * The GetSelfSavingsAccountsAccountIdChargesResponse model constructor.
     * @property {module:model/GetSelfSavingsAccountsAccountIdChargesResponse}
     */
    GetSelfSavingsAccountsAccountIdChargesResponse,

    /**
     * The GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse model constructor.
     * @property {module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse,

    /**
     * The GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse}
     */
    GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse,

    /**
     * The GetSelfSavingsAccountsResponse model constructor.
     * @property {module:model/GetSelfSavingsAccountsResponse}
     */
    GetSelfSavingsAccountsResponse,

    /**
     * The GetSelfSavingsChargeCalculationType model constructor.
     * @property {module:model/GetSelfSavingsChargeCalculationType}
     */
    GetSelfSavingsChargeCalculationType,

    /**
     * The GetSelfSavingsChargeTimeType model constructor.
     * @property {module:model/GetSelfSavingsChargeTimeType}
     */
    GetSelfSavingsChargeTimeType,

    /**
     * The GetSelfSavingsCurrency model constructor.
     * @property {module:model/GetSelfSavingsCurrency}
     */
    GetSelfSavingsCurrency,

    /**
     * The GetSelfSavingsInterestCalculationDaysInYearType model constructor.
     * @property {module:model/GetSelfSavingsInterestCalculationDaysInYearType}
     */
    GetSelfSavingsInterestCalculationDaysInYearType,

    /**
     * The GetSelfSavingsInterestCalculationType model constructor.
     * @property {module:model/GetSelfSavingsInterestCalculationType}
     */
    GetSelfSavingsInterestCalculationType,

    /**
     * The GetSelfSavingsInterestCompoundingPeriodType model constructor.
     * @property {module:model/GetSelfSavingsInterestCompoundingPeriodType}
     */
    GetSelfSavingsInterestCompoundingPeriodType,

    /**
     * The GetSelfSavingsInterestPostingPeriodType model constructor.
     * @property {module:model/GetSelfSavingsInterestPostingPeriodType}
     */
    GetSelfSavingsInterestPostingPeriodType,

    /**
     * The GetSelfSavingsPaymentDetailData model constructor.
     * @property {module:model/GetSelfSavingsPaymentDetailData}
     */
    GetSelfSavingsPaymentDetailData,

    /**
     * The GetSelfSavingsPaymentType model constructor.
     * @property {module:model/GetSelfSavingsPaymentType}
     */
    GetSelfSavingsPaymentType,

    /**
     * The GetSelfSavingsStatus model constructor.
     * @property {module:model/GetSelfSavingsStatus}
     */
    GetSelfSavingsStatus,

    /**
     * The GetSelfSavingsSummary model constructor.
     * @property {module:model/GetSelfSavingsSummary}
     */
    GetSelfSavingsSummary,

    /**
     * The GetSelfSavingsTimeline model constructor.
     * @property {module:model/GetSelfSavingsTimeline}
     */
    GetSelfSavingsTimeline,

    /**
     * The GetSelfSavingsTransactionCurrency model constructor.
     * @property {module:model/GetSelfSavingsTransactionCurrency}
     */
    GetSelfSavingsTransactionCurrency,

    /**
     * The GetSelfSavingsTransactionType model constructor.
     * @property {module:model/GetSelfSavingsTransactionType}
     */
    GetSelfSavingsTransactionType,

    /**
     * The GetSelfUserDetailsOrganisationalRole model constructor.
     * @property {module:model/GetSelfUserDetailsOrganisationalRole}
     */
    GetSelfUserDetailsOrganisationalRole,

    /**
     * The GetSelfUserDetailsResponse model constructor.
     * @property {module:model/GetSelfUserDetailsResponse}
     */
    GetSelfUserDetailsResponse,

    /**
     * The GetSelfUserDetailsRoles model constructor.
     * @property {module:model/GetSelfUserDetailsRoles}
     */
    GetSelfUserDetailsRoles,

    /**
     * The GetShareAccountsChargeAppliesTo model constructor.
     * @property {module:model/GetShareAccountsChargeAppliesTo}
     */
    GetShareAccountsChargeAppliesTo,

    /**
     * The GetShareAccountsChargeCalculationType model constructor.
     * @property {module:model/GetShareAccountsChargeCalculationType}
     */
    GetShareAccountsChargeCalculationType,

    /**
     * The GetShareAccountsChargeOptions model constructor.
     * @property {module:model/GetShareAccountsChargeOptions}
     */
    GetShareAccountsChargeOptions,

    /**
     * The GetShareAccountsChargePaymentMode model constructor.
     * @property {module:model/GetShareAccountsChargePaymentMode}
     */
    GetShareAccountsChargePaymentMode,

    /**
     * The GetShareAccountsChargeTimeType model constructor.
     * @property {module:model/GetShareAccountsChargeTimeType}
     */
    GetShareAccountsChargeTimeType,

    /**
     * The GetShareAccountsClientIdProductIdAccountingRule model constructor.
     * @property {module:model/GetShareAccountsClientIdProductIdAccountingRule}
     */
    GetShareAccountsClientIdProductIdAccountingRule,

    /**
     * The GetShareAccountsClientIdProductIdLockPeriodTypeEnum model constructor.
     * @property {module:model/GetShareAccountsClientIdProductIdLockPeriodTypeEnum}
     */
    GetShareAccountsClientIdProductIdLockPeriodTypeEnum,

    /**
     * The GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum model constructor.
     * @property {module:model/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum}
     */
    GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum,

    /**
     * The GetShareAccountsClientIdProductIdResponse model constructor.
     * @property {module:model/GetShareAccountsClientIdProductIdResponse}
     */
    GetShareAccountsClientIdProductIdResponse,

    /**
     * The GetShareAccountsCurrency model constructor.
     * @property {module:model/GetShareAccountsCurrency}
     */
    GetShareAccountsCurrency,

    /**
     * The GetShareAccountsIncomeFromFeeAccountId model constructor.
     * @property {module:model/GetShareAccountsIncomeFromFeeAccountId}
     */
    GetShareAccountsIncomeFromFeeAccountId,

    /**
     * The GetShareAccountsShareEquityId model constructor.
     * @property {module:model/GetShareAccountsShareEquityId}
     */
    GetShareAccountsShareEquityId,

    /**
     * The GetShareAccountsShareReferenceId model constructor.
     * @property {module:model/GetShareAccountsShareReferenceId}
     */
    GetShareAccountsShareReferenceId,

    /**
     * The GetShareAccountsShareSuspenseId model constructor.
     * @property {module:model/GetShareAccountsShareSuspenseId}
     */
    GetShareAccountsShareSuspenseId,

    /**
     * The GetShareEquityId model constructor.
     * @property {module:model/GetShareEquityId}
     */
    GetShareEquityId,

    /**
     * The GetShareReferenceId model constructor.
     * @property {module:model/GetShareReferenceId}
     */
    GetShareReferenceId,

    /**
     * The GetShareSuspenseId model constructor.
     * @property {module:model/GetShareSuspenseId}
     */
    GetShareSuspenseId,

    /**
     * The GetStaffResponse model constructor.
     * @property {module:model/GetStaffResponse}
     */
    GetStaffResponse,

    /**
     * The GetStandingInstructionHistoryFromAccount model constructor.
     * @property {module:model/GetStandingInstructionHistoryFromAccount}
     */
    GetStandingInstructionHistoryFromAccount,

    /**
     * The GetStandingInstructionHistoryPageItemsFromClient model constructor.
     * @property {module:model/GetStandingInstructionHistoryPageItemsFromClient}
     */
    GetStandingInstructionHistoryPageItemsFromClient,

    /**
     * The GetStandingInstructionHistoryPageItemsResponse model constructor.
     * @property {module:model/GetStandingInstructionHistoryPageItemsResponse}
     */
    GetStandingInstructionHistoryPageItemsResponse,

    /**
     * The GetStandingInstructionHistoryToAccount model constructor.
     * @property {module:model/GetStandingInstructionHistoryToAccount}
     */
    GetStandingInstructionHistoryToAccount,

    /**
     * The GetStandingInstructionHistoryToClient model constructor.
     * @property {module:model/GetStandingInstructionHistoryToClient}
     */
    GetStandingInstructionHistoryToClient,

    /**
     * The GetStandingInstructionRunHistoryResponse model constructor.
     * @property {module:model/GetStandingInstructionRunHistoryResponse}
     */
    GetStandingInstructionRunHistoryResponse,

    /**
     * The GetStandingInstructionsResponse model constructor.
     * @property {module:model/GetStandingInstructionsResponse}
     */
    GetStandingInstructionsResponse,

    /**
     * The GetStandingInstructionsStandingInstructionIdResponse model constructor.
     * @property {module:model/GetStandingInstructionsStandingInstructionIdResponse}
     */
    GetStandingInstructionsStandingInstructionIdResponse,

    /**
     * The GetStandingInstructionsTemplateResponse model constructor.
     * @property {module:model/GetStandingInstructionsTemplateResponse}
     */
    GetStandingInstructionsTemplateResponse,

    /**
     * The GetStatusOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetStatusOptionsResponseStandingInstructionSwagger}
     */
    GetStatusOptionsResponseStandingInstructionSwagger,

    /**
     * The GetStatusStandingInstructionSwagger model constructor.
     * @property {module:model/GetStatusStandingInstructionSwagger}
     */
    GetStatusStandingInstructionSwagger,

    /**
     * The GetSurveyResponse model constructor.
     * @property {module:model/GetSurveyResponse}
     */
    GetSurveyResponse,

    /**
     * The GetSurveyResponseDatatableData model constructor.
     * @property {module:model/GetSurveyResponseDatatableData}
     */
    GetSurveyResponseDatatableData,

    /**
     * The GetTaxesComponentsCreditAccount model constructor.
     * @property {module:model/GetTaxesComponentsCreditAccount}
     */
    GetTaxesComponentsCreditAccount,

    /**
     * The GetTaxesComponentsCreditAccountType model constructor.
     * @property {module:model/GetTaxesComponentsCreditAccountType}
     */
    GetTaxesComponentsCreditAccountType,

    /**
     * The GetTaxesComponentsResponse model constructor.
     * @property {module:model/GetTaxesComponentsResponse}
     */
    GetTaxesComponentsResponse,

    /**
     * The GetTaxesGroupResponse model constructor.
     * @property {module:model/GetTaxesGroupResponse}
     */
    GetTaxesGroupResponse,

    /**
     * The GetTaxesGroupTaxAssociations model constructor.
     * @property {module:model/GetTaxesGroupTaxAssociations}
     */
    GetTaxesGroupTaxAssociations,

    /**
     * The GetTaxesGroupTaxComponent model constructor.
     * @property {module:model/GetTaxesGroupTaxComponent}
     */
    GetTaxesGroupTaxComponent,

    /**
     * The GetTellersResponse model constructor.
     * @property {module:model/GetTellersResponse}
     */
    GetTellersResponse,

    /**
     * The GetTellersTellerIdCashiersCashierIdResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersCashierIdResponse}
     */
    GetTellersTellerIdCashiersCashierIdResponse,

    /**
     * The GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse}
     */
    GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse,

    /**
     * The GetTellersTellerIdCashiersCashiersIdTransactionsResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse}
     */
    GetTellersTellerIdCashiersCashiersIdTransactionsResponse,

    /**
     * The GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse}
     */
    GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse,

    /**
     * The GetTellersTellerIdCashiersResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersResponse}
     */
    GetTellersTellerIdCashiersResponse,

    /**
     * The GetTellersTellerIdCashiersTemplateResponse model constructor.
     * @property {module:model/GetTellersTellerIdCashiersTemplateResponse}
     */
    GetTellersTellerIdCashiersTemplateResponse,

    /**
     * The GetTemplatesResponse model constructor.
     * @property {module:model/GetTemplatesResponse}
     */
    GetTemplatesResponse,

    /**
     * The GetTemplatesTemplateIdResponse model constructor.
     * @property {module:model/GetTemplatesTemplateIdResponse}
     */
    GetTemplatesTemplateIdResponse,

    /**
     * The GetTemplatesTemplateResponse model constructor.
     * @property {module:model/GetTemplatesTemplateResponse}
     */
    GetTemplatesTemplateResponse,

    /**
     * The GetToAccountStandingInstructionSwagger model constructor.
     * @property {module:model/GetToAccountStandingInstructionSwagger}
     */
    GetToAccountStandingInstructionSwagger,

    /**
     * The GetToAccountTypeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetToAccountTypeOptionsResponseStandingInstructionSwagger}
     */
    GetToAccountTypeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetToAccountTypeStandingInstructionSwagger model constructor.
     * @property {module:model/GetToAccountTypeStandingInstructionSwagger}
     */
    GetToAccountTypeStandingInstructionSwagger,

    /**
     * The GetToClientStandingInstructionSwagger model constructor.
     * @property {module:model/GetToClientStandingInstructionSwagger}
     */
    GetToClientStandingInstructionSwagger,

    /**
     * The GetToOfficeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetToOfficeOptionsResponseStandingInstructionSwagger}
     */
    GetToOfficeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetToOfficeStandingInstructionSwagger model constructor.
     * @property {module:model/GetToOfficeStandingInstructionSwagger}
     */
    GetToOfficeStandingInstructionSwagger,

    /**
     * The GetTransferTypeOptionsResponseStandingInstructionSwagger model constructor.
     * @property {module:model/GetTransferTypeOptionsResponseStandingInstructionSwagger}
     */
    GetTransferTypeOptionsResponseStandingInstructionSwagger,

    /**
     * The GetTransferTypeStandingInstructionSwagger model constructor.
     * @property {module:model/GetTransferTypeStandingInstructionSwagger}
     */
    GetTransferTypeStandingInstructionSwagger,

    /**
     * The GetUserDetailsResponse model constructor.
     * @property {module:model/GetUserDetailsResponse}
     */
    GetUserDetailsResponse,

    /**
     * The GetUsersResponse model constructor.
     * @property {module:model/GetUsersResponse}
     */
    GetUsersResponse,

    /**
     * The GetUsersTemplateResponse model constructor.
     * @property {module:model/GetUsersTemplateResponse}
     */
    GetUsersTemplateResponse,

    /**
     * The GetUsersUserIdResponse model constructor.
     * @property {module:model/GetUsersUserIdResponse}
     */
    GetUsersUserIdResponse,

    /**
     * The GetWorkingDaysResponse model constructor.
     * @property {module:model/GetWorkingDaysResponse}
     */
    GetWorkingDaysResponse,

    /**
     * The GetWorkingDaysTemplateResponse model constructor.
     * @property {module:model/GetWorkingDaysTemplateResponse}
     */
    GetWorkingDaysTemplateResponse,

    /**
     * The GlobalConfigurationPropertyData model constructor.
     * @property {module:model/GlobalConfigurationPropertyData}
     */
    GlobalConfigurationPropertyData,

    /**
     * The GrantedAuthority model constructor.
     * @property {module:model/GrantedAuthority}
     */
    GrantedAuthority,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupLevel model constructor.
     * @property {module:model/GroupLevel}
     */
    GroupLevel,

    /**
     * The Grouping model constructor.
     * @property {module:model/Grouping}
     */
    Grouping,

    /**
     * The Header model constructor.
     * @property {module:model/Header}
     */
    Header,

    /**
     * The HookTemplateData model constructor.
     * @property {module:model/HookTemplateData}
     */
    HookTemplateData,

    /**
     * The IdDocument model constructor.
     * @property {module:model/IdDocument}
     */
    IdDocument,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject10 model constructor.
     * @property {module:model/InlineObject10}
     */
    InlineObject10,

    /**
     * The InlineObject11 model constructor.
     * @property {module:model/InlineObject11}
     */
    InlineObject11,

    /**
     * The InlineObject12 model constructor.
     * @property {module:model/InlineObject12}
     */
    InlineObject12,

    /**
     * The InlineObject13 model constructor.
     * @property {module:model/InlineObject13}
     */
    InlineObject13,

    /**
     * The InlineObject14 model constructor.
     * @property {module:model/InlineObject14}
     */
    InlineObject14,

    /**
     * The InlineObject15 model constructor.
     * @property {module:model/InlineObject15}
     */
    InlineObject15,

    /**
     * The InlineObject16 model constructor.
     * @property {module:model/InlineObject16}
     */
    InlineObject16,

    /**
     * The InlineObject17 model constructor.
     * @property {module:model/InlineObject17}
     */
    InlineObject17,

    /**
     * The InlineObject18 model constructor.
     * @property {module:model/InlineObject18}
     */
    InlineObject18,

    /**
     * The InlineObject19 model constructor.
     * @property {module:model/InlineObject19}
     */
    InlineObject19,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject20 model constructor.
     * @property {module:model/InlineObject20}
     */
    InlineObject20,

    /**
     * The InlineObject21 model constructor.
     * @property {module:model/InlineObject21}
     */
    InlineObject21,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The InteropAccountData model constructor.
     * @property {module:model/InteropAccountData}
     */
    InteropAccountData,

    /**
     * The InteropIdentifierAccountResponseData model constructor.
     * @property {module:model/InteropIdentifierAccountResponseData}
     */
    InteropIdentifierAccountResponseData,

    /**
     * The InteropIdentifierRequestData model constructor.
     * @property {module:model/InteropIdentifierRequestData}
     */
    InteropIdentifierRequestData,

    /**
     * The InteropIdentifiersResponseData model constructor.
     * @property {module:model/InteropIdentifiersResponseData}
     */
    InteropIdentifiersResponseData,

    /**
     * The InteropKycResponseData model constructor.
     * @property {module:model/InteropKycResponseData}
     */
    InteropKycResponseData,

    /**
     * The InteropQuoteRequestData model constructor.
     * @property {module:model/InteropQuoteRequestData}
     */
    InteropQuoteRequestData,

    /**
     * The InteropQuoteResponseData model constructor.
     * @property {module:model/InteropQuoteResponseData}
     */
    InteropQuoteResponseData,

    /**
     * The InteropTransactionRequestData model constructor.
     * @property {module:model/InteropTransactionRequestData}
     */
    InteropTransactionRequestData,

    /**
     * The InteropTransactionRequestResponseData model constructor.
     * @property {module:model/InteropTransactionRequestResponseData}
     */
    InteropTransactionRequestResponseData,

    /**
     * The InteropTransactionTypeData model constructor.
     * @property {module:model/InteropTransactionTypeData}
     */
    InteropTransactionTypeData,

    /**
     * The InteropTransactionsData model constructor.
     * @property {module:model/InteropTransactionsData}
     */
    InteropTransactionsData,

    /**
     * The InteropTransferRequestData model constructor.
     * @property {module:model/InteropTransferRequestData}
     */
    InteropTransferRequestData,

    /**
     * The InteropTransferResponseData model constructor.
     * @property {module:model/InteropTransferResponseData}
     */
    InteropTransferResponseData,

    /**
     * The JobDetailHistoryDataSwagger model constructor.
     * @property {module:model/JobDetailHistoryDataSwagger}
     */
    JobDetailHistoryDataSwagger,

    /**
     * The JournalEntryCommand model constructor.
     * @property {module:model/JournalEntryCommand}
     */
    JournalEntryCommand,

    /**
     * The JournalEntryData model constructor.
     * @property {module:model/JournalEntryData}
     */
    JournalEntryData,

    /**
     * The LoanProduct model constructor.
     * @property {module:model/LoanProduct}
     */
    LoanProduct,

    /**
     * The LoanProductBorrowerCycleVariationData model constructor.
     * @property {module:model/LoanProductBorrowerCycleVariationData}
     */
    LoanProductBorrowerCycleVariationData,

    /**
     * The LoanProductConfigurableAttributes model constructor.
     * @property {module:model/LoanProductConfigurableAttributes}
     */
    LoanProductConfigurableAttributes,

    /**
     * The LoanProductData model constructor.
     * @property {module:model/LoanProductData}
     */
    LoanProductData,

    /**
     * The LoanProductFloatingRates model constructor.
     * @property {module:model/LoanProductFloatingRates}
     */
    LoanProductFloatingRates,

    /**
     * The LoanProductGuaranteeDetails model constructor.
     * @property {module:model/LoanProductGuaranteeDetails}
     */
    LoanProductGuaranteeDetails,

    /**
     * The LoanProductInterestRecalculationData model constructor.
     * @property {module:model/LoanProductInterestRecalculationData}
     */
    LoanProductInterestRecalculationData,

    /**
     * The LoanProductInterestRecalculationDetails model constructor.
     * @property {module:model/LoanProductInterestRecalculationDetails}
     */
    LoanProductInterestRecalculationDetails,

    /**
     * The LoanProductProvisioningEntryData model constructor.
     * @property {module:model/LoanProductProvisioningEntryData}
     */
    LoanProductProvisioningEntryData,

    /**
     * The LoanProductRelatedDetail model constructor.
     * @property {module:model/LoanProductRelatedDetail}
     */
    LoanProductRelatedDetail,

    /**
     * The LoanTransactionProcessingStrategy model constructor.
     * @property {module:model/LoanTransactionProcessingStrategy}
     */
    LoanTransactionProcessingStrategy,

    /**
     * The LookupTableData model constructor.
     * @property {module:model/LookupTableData}
     */
    LookupTableData,

    /**
     * The LookupTableEntry model constructor.
     * @property {module:model/LookupTableEntry}
     */
    LookupTableEntry,

    /**
     * The MonetaryCurrency model constructor.
     * @property {module:model/MonetaryCurrency}
     */
    MonetaryCurrency,

    /**
     * The Money model constructor.
     * @property {module:model/Money}
     */
    Money,

    /**
     * The MoneyData model constructor.
     * @property {module:model/MoneyData}
     */
    MoneyData,

    /**
     * The MultiPart model constructor.
     * @property {module:model/MultiPart}
     */
    MultiPart,

    /**
     * The Office model constructor.
     * @property {module:model/Office}
     */
    Office,

    /**
     * The OfficeData model constructor.
     * @property {module:model/OfficeData}
     */
    OfficeData,

    /**
     * The PageCashierTransactionData model constructor.
     * @property {module:model/PageCashierTransactionData}
     */
    PageCashierTransactionData,

    /**
     * The ParameterizedHeader model constructor.
     * @property {module:model/ParameterizedHeader}
     */
    ParameterizedHeader,

    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission,

    /**
     * The PostAccountNumberFormatsRequest model constructor.
     * @property {module:model/PostAccountNumberFormatsRequest}
     */
    PostAccountNumberFormatsRequest,

    /**
     * The PostAccountNumberFormatsResponse model constructor.
     * @property {module:model/PostAccountNumberFormatsResponse}
     */
    PostAccountNumberFormatsResponse,

    /**
     * The PostAccountTransfersRefundByTransferRequest model constructor.
     * @property {module:model/PostAccountTransfersRefundByTransferRequest}
     */
    PostAccountTransfersRefundByTransferRequest,

    /**
     * The PostAccountTransfersRefundByTransferResponse model constructor.
     * @property {module:model/PostAccountTransfersRefundByTransferResponse}
     */
    PostAccountTransfersRefundByTransferResponse,

    /**
     * The PostAccountTransfersRequest model constructor.
     * @property {module:model/PostAccountTransfersRequest}
     */
    PostAccountTransfersRequest,

    /**
     * The PostAccountTransfersResponse model constructor.
     * @property {module:model/PostAccountTransfersResponse}
     */
    PostAccountTransfersResponse,

    /**
     * The PostAccountingRulesRequest model constructor.
     * @property {module:model/PostAccountingRulesRequest}
     */
    PostAccountingRulesRequest,

    /**
     * The PostAccountingRulesResponse model constructor.
     * @property {module:model/PostAccountingRulesResponse}
     */
    PostAccountingRulesResponse,

    /**
     * The PostAccountsCharges model constructor.
     * @property {module:model/PostAccountsCharges}
     */
    PostAccountsCharges,

    /**
     * The PostAccountsRequestedShares model constructor.
     * @property {module:model/PostAccountsRequestedShares}
     */
    PostAccountsRequestedShares,

    /**
     * The PostAccountsTypeAccountIdRequest model constructor.
     * @property {module:model/PostAccountsTypeAccountIdRequest}
     */
    PostAccountsTypeAccountIdRequest,

    /**
     * The PostAccountsTypeAccountIdResponse model constructor.
     * @property {module:model/PostAccountsTypeAccountIdResponse}
     */
    PostAccountsTypeAccountIdResponse,

    /**
     * The PostAccountsTypeRequest model constructor.
     * @property {module:model/PostAccountsTypeRequest}
     */
    PostAccountsTypeRequest,

    /**
     * The PostAccountsTypeResponse model constructor.
     * @property {module:model/PostAccountsTypeResponse}
     */
    PostAccountsTypeResponse,

    /**
     * The PostAdhocQuerySearchRequest model constructor.
     * @property {module:model/PostAdhocQuerySearchRequest}
     */
    PostAdhocQuerySearchRequest,

    /**
     * The PostAdhocQuerySearchResponse model constructor.
     * @property {module:model/PostAdhocQuerySearchResponse}
     */
    PostAdhocQuerySearchResponse,

    /**
     * The PostAuthenticationResponse model constructor.
     * @property {module:model/PostAuthenticationResponse}
     */
    PostAuthenticationResponse,

    /**
     * The PostBatchesRequest model constructor.
     * @property {module:model/PostBatchesRequest}
     */
    PostBatchesRequest,

    /**
     * The PostBodyRequestSwagger model constructor.
     * @property {module:model/PostBodyRequestSwagger}
     */
    PostBodyRequestSwagger,

    /**
     * The PostCentersCenterIdRequest model constructor.
     * @property {module:model/PostCentersCenterIdRequest}
     */
    PostCentersCenterIdRequest,

    /**
     * The PostCentersCenterIdResponse model constructor.
     * @property {module:model/PostCentersCenterIdResponse}
     */
    PostCentersCenterIdResponse,

    /**
     * The PostCentersRequest model constructor.
     * @property {module:model/PostCentersRequest}
     */
    PostCentersRequest,

    /**
     * The PostCentersResponse model constructor.
     * @property {module:model/PostCentersResponse}
     */
    PostCentersResponse,

    /**
     * The PostChargesRequest model constructor.
     * @property {module:model/PostChargesRequest}
     */
    PostChargesRequest,

    /**
     * The PostChargesResponse model constructor.
     * @property {module:model/PostChargesResponse}
     */
    PostChargesResponse,

    /**
     * The PostClientClientIdAddressesRequest model constructor.
     * @property {module:model/PostClientClientIdAddressesRequest}
     */
    PostClientClientIdAddressesRequest,

    /**
     * The PostClientClientIdAddressesResponse model constructor.
     * @property {module:model/PostClientClientIdAddressesResponse}
     */
    PostClientClientIdAddressesResponse,

    /**
     * The PostClientsClientIdChargesChargeIdRequest model constructor.
     * @property {module:model/PostClientsClientIdChargesChargeIdRequest}
     */
    PostClientsClientIdChargesChargeIdRequest,

    /**
     * The PostClientsClientIdChargesChargeIdResponse model constructor.
     * @property {module:model/PostClientsClientIdChargesChargeIdResponse}
     */
    PostClientsClientIdChargesChargeIdResponse,

    /**
     * The PostClientsClientIdChargesRequest model constructor.
     * @property {module:model/PostClientsClientIdChargesRequest}
     */
    PostClientsClientIdChargesRequest,

    /**
     * The PostClientsClientIdChargesResponse model constructor.
     * @property {module:model/PostClientsClientIdChargesResponse}
     */
    PostClientsClientIdChargesResponse,

    /**
     * The PostClientsClientIdIdentifiersRequest model constructor.
     * @property {module:model/PostClientsClientIdIdentifiersRequest}
     */
    PostClientsClientIdIdentifiersRequest,

    /**
     * The PostClientsClientIdIdentifiersResponse model constructor.
     * @property {module:model/PostClientsClientIdIdentifiersResponse}
     */
    PostClientsClientIdIdentifiersResponse,

    /**
     * The PostClientsClientIdRequest model constructor.
     * @property {module:model/PostClientsClientIdRequest}
     */
    PostClientsClientIdRequest,

    /**
     * The PostClientsClientIdResponse model constructor.
     * @property {module:model/PostClientsClientIdResponse}
     */
    PostClientsClientIdResponse,

    /**
     * The PostClientsClientIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/PostClientsClientIdTransactionsTransactionIdResponse}
     */
    PostClientsClientIdTransactionsTransactionIdResponse,

    /**
     * The PostClientsRequest model constructor.
     * @property {module:model/PostClientsRequest}
     */
    PostClientsRequest,

    /**
     * The PostClientsResponse model constructor.
     * @property {module:model/PostClientsResponse}
     */
    PostClientsResponse,

    /**
     * The PostCodeValueDataResponse model constructor.
     * @property {module:model/PostCodeValueDataResponse}
     */
    PostCodeValueDataResponse,

    /**
     * The PostCodeValuesDataRequest model constructor.
     * @property {module:model/PostCodeValuesDataRequest}
     */
    PostCodeValuesDataRequest,

    /**
     * The PostCodesRequest model constructor.
     * @property {module:model/PostCodesRequest}
     */
    PostCodesRequest,

    /**
     * The PostCodesResponse model constructor.
     * @property {module:model/PostCodesResponse}
     */
    PostCodesResponse,

    /**
     * The PostCollectionSheetBulkRepaymentTransactions model constructor.
     * @property {module:model/PostCollectionSheetBulkRepaymentTransactions}
     */
    PostCollectionSheetBulkRepaymentTransactions,

    /**
     * The PostCollectionSheetChanges model constructor.
     * @property {module:model/PostCollectionSheetChanges}
     */
    PostCollectionSheetChanges,

    /**
     * The PostCollectionSheetRequest model constructor.
     * @property {module:model/PostCollectionSheetRequest}
     */
    PostCollectionSheetRequest,

    /**
     * The PostCollectionSheetResponse model constructor.
     * @property {module:model/PostCollectionSheetResponse}
     */
    PostCollectionSheetResponse,

    /**
     * The PostDataTablesAppTableIdRequest model constructor.
     * @property {module:model/PostDataTablesAppTableIdRequest}
     */
    PostDataTablesAppTableIdRequest,

    /**
     * The PostDataTablesAppTableIdResponse model constructor.
     * @property {module:model/PostDataTablesAppTableIdResponse}
     */
    PostDataTablesAppTableIdResponse,

    /**
     * The PostDataTablesRequest model constructor.
     * @property {module:model/PostDataTablesRequest}
     */
    PostDataTablesRequest,

    /**
     * The PostDataTablesResponse model constructor.
     * @property {module:model/PostDataTablesResponse}
     */
    PostDataTablesResponse,

    /**
     * The PostEntityDatatableChecksTemplateRequest model constructor.
     * @property {module:model/PostEntityDatatableChecksTemplateRequest}
     */
    PostEntityDatatableChecksTemplateRequest,

    /**
     * The PostEntityDatatableChecksTemplateResponse model constructor.
     * @property {module:model/PostEntityDatatableChecksTemplateResponse}
     */
    PostEntityDatatableChecksTemplateResponse,

    /**
     * The PostEntityTypeEntityIdDocumentsResponse model constructor.
     * @property {module:model/PostEntityTypeEntityIdDocumentsResponse}
     */
    PostEntityTypeEntityIdDocumentsResponse,

    /**
     * The PostFinancialActivityAccountsRequest model constructor.
     * @property {module:model/PostFinancialActivityAccountsRequest}
     */
    PostFinancialActivityAccountsRequest,

    /**
     * The PostFinancialActivityAccountsResponse model constructor.
     * @property {module:model/PostFinancialActivityAccountsResponse}
     */
    PostFinancialActivityAccountsResponse,

    /**
     * The PostFixedDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/PostFixedDepositAccountsAccountIdResponse}
     */
    PostFixedDepositAccountsAccountIdResponse,

    /**
     * The PostFixedDepositAccountsRequest model constructor.
     * @property {module:model/PostFixedDepositAccountsRequest}
     */
    PostFixedDepositAccountsRequest,

    /**
     * The PostFixedDepositAccountsResponse model constructor.
     * @property {module:model/PostFixedDepositAccountsResponse}
     */
    PostFixedDepositAccountsResponse,

    /**
     * The PostFixedDepositProductsChartSlabs model constructor.
     * @property {module:model/PostFixedDepositProductsChartSlabs}
     */
    PostFixedDepositProductsChartSlabs,

    /**
     * The PostFixedDepositProductsCharts model constructor.
     * @property {module:model/PostFixedDepositProductsCharts}
     */
    PostFixedDepositProductsCharts,

    /**
     * The PostFixedDepositProductsRequest model constructor.
     * @property {module:model/PostFixedDepositProductsRequest}
     */
    PostFixedDepositProductsRequest,

    /**
     * The PostFixedDepositProductsResponse model constructor.
     * @property {module:model/PostFixedDepositProductsResponse}
     */
    PostFixedDepositProductsResponse,

    /**
     * The PostFloatingRatesRatePeriods model constructor.
     * @property {module:model/PostFloatingRatesRatePeriods}
     */
    PostFloatingRatesRatePeriods,

    /**
     * The PostFloatingRatesRequest model constructor.
     * @property {module:model/PostFloatingRatesRequest}
     */
    PostFloatingRatesRequest,

    /**
     * The PostFloatingRatesResponse model constructor.
     * @property {module:model/PostFloatingRatesResponse}
     */
    PostFloatingRatesResponse,

    /**
     * The PostFundsRequest model constructor.
     * @property {module:model/PostFundsRequest}
     */
    PostFundsRequest,

    /**
     * The PostFundsResponse model constructor.
     * @property {module:model/PostFundsResponse}
     */
    PostFundsResponse,

    /**
     * The PostGLAccountsRequest model constructor.
     * @property {module:model/PostGLAccountsRequest}
     */
    PostGLAccountsRequest,

    /**
     * The PostGLAccountsResponse model constructor.
     * @property {module:model/PostGLAccountsResponse}
     */
    PostGLAccountsResponse,

    /**
     * The PostGlClosuresRequest model constructor.
     * @property {module:model/PostGlClosuresRequest}
     */
    PostGlClosuresRequest,

    /**
     * The PostGlClosuresResponse model constructor.
     * @property {module:model/PostGlClosuresResponse}
     */
    PostGlClosuresResponse,

    /**
     * The PostGroupsGroupIdClients model constructor.
     * @property {module:model/PostGroupsGroupIdClients}
     */
    PostGroupsGroupIdClients,

    /**
     * The PostGroupsGroupIdCommandUnassignStaffRequest model constructor.
     * @property {module:model/PostGroupsGroupIdCommandUnassignStaffRequest}
     */
    PostGroupsGroupIdCommandUnassignStaffRequest,

    /**
     * The PostGroupsGroupIdCommandUnassignStaffResponse model constructor.
     * @property {module:model/PostGroupsGroupIdCommandUnassignStaffResponse}
     */
    PostGroupsGroupIdCommandUnassignStaffResponse,

    /**
     * The PostGroupsGroupIdRequest model constructor.
     * @property {module:model/PostGroupsGroupIdRequest}
     */
    PostGroupsGroupIdRequest,

    /**
     * The PostGroupsGroupIdResponse model constructor.
     * @property {module:model/PostGroupsGroupIdResponse}
     */
    PostGroupsGroupIdResponse,

    /**
     * The PostGroupsRequest model constructor.
     * @property {module:model/PostGroupsRequest}
     */
    PostGroupsRequest,

    /**
     * The PostGroupsResponse model constructor.
     * @property {module:model/PostGroupsResponse}
     */
    PostGroupsResponse,

    /**
     * The PostHolidaysHolidayIdResponse model constructor.
     * @property {module:model/PostHolidaysHolidayIdResponse}
     */
    PostHolidaysHolidayIdResponse,

    /**
     * The PostHolidaysRequest model constructor.
     * @property {module:model/PostHolidaysRequest}
     */
    PostHolidaysRequest,

    /**
     * The PostHolidaysRequestOffices model constructor.
     * @property {module:model/PostHolidaysRequestOffices}
     */
    PostHolidaysRequestOffices,

    /**
     * The PostHolidaysResponse model constructor.
     * @property {module:model/PostHolidaysResponse}
     */
    PostHolidaysResponse,

    /**
     * The PostHookRequest model constructor.
     * @property {module:model/PostHookRequest}
     */
    PostHookRequest,

    /**
     * The PostHookResponse model constructor.
     * @property {module:model/PostHookResponse}
     */
    PostHookResponse,

    /**
     * The PostInterestRateChartsChartIdChartSlabsIncentives model constructor.
     * @property {module:model/PostInterestRateChartsChartIdChartSlabsIncentives}
     */
    PostInterestRateChartsChartIdChartSlabsIncentives,

    /**
     * The PostInterestRateChartsChartIdChartSlabsRequest model constructor.
     * @property {module:model/PostInterestRateChartsChartIdChartSlabsRequest}
     */
    PostInterestRateChartsChartIdChartSlabsRequest,

    /**
     * The PostInterestRateChartsChartIdChartSlabsResponse model constructor.
     * @property {module:model/PostInterestRateChartsChartIdChartSlabsResponse}
     */
    PostInterestRateChartsChartIdChartSlabsResponse,

    /**
     * The PostInterestRateChartsRequest model constructor.
     * @property {module:model/PostInterestRateChartsRequest}
     */
    PostInterestRateChartsRequest,

    /**
     * The PostInterestRateChartsResponse model constructor.
     * @property {module:model/PostInterestRateChartsResponse}
     */
    PostInterestRateChartsResponse,

    /**
     * The PostJournalEntriesResponse model constructor.
     * @property {module:model/PostJournalEntriesResponse}
     */
    PostJournalEntriesResponse,

    /**
     * The PostJournalEntriesTransactionIdRequest model constructor.
     * @property {module:model/PostJournalEntriesTransactionIdRequest}
     */
    PostJournalEntriesTransactionIdRequest,

    /**
     * The PostJournalEntriesTransactionIdResponse model constructor.
     * @property {module:model/PostJournalEntriesTransactionIdResponse}
     */
    PostJournalEntriesTransactionIdResponse,

    /**
     * The PostLinkDelinkAccountsToFromPocketResponse model constructor.
     * @property {module:model/PostLinkDelinkAccountsToFromPocketResponse}
     */
    PostLinkDelinkAccountsToFromPocketResponse,

    /**
     * The PostLoanChanges model constructor.
     * @property {module:model/PostLoanChanges}
     */
    PostLoanChanges,

    /**
     * The PostLoanProductsRequest model constructor.
     * @property {module:model/PostLoanProductsRequest}
     */
    PostLoanProductsRequest,

    /**
     * The PostLoanProductsResponse model constructor.
     * @property {module:model/PostLoanProductsResponse}
     */
    PostLoanProductsResponse,

    /**
     * The PostLoansLoanIdChargesChargeIdRequest model constructor.
     * @property {module:model/PostLoansLoanIdChargesChargeIdRequest}
     */
    PostLoansLoanIdChargesChargeIdRequest,

    /**
     * The PostLoansLoanIdChargesChargeIdResponse model constructor.
     * @property {module:model/PostLoansLoanIdChargesChargeIdResponse}
     */
    PostLoansLoanIdChargesChargeIdResponse,

    /**
     * The PostLoansLoanIdChargesRequest model constructor.
     * @property {module:model/PostLoansLoanIdChargesRequest}
     */
    PostLoansLoanIdChargesRequest,

    /**
     * The PostLoansLoanIdChargesResponse model constructor.
     * @property {module:model/PostLoansLoanIdChargesResponse}
     */
    PostLoansLoanIdChargesResponse,

    /**
     * The PostLoansLoanIdCollateralsRequest model constructor.
     * @property {module:model/PostLoansLoanIdCollateralsRequest}
     */
    PostLoansLoanIdCollateralsRequest,

    /**
     * The PostLoansLoanIdCollateralsResponse model constructor.
     * @property {module:model/PostLoansLoanIdCollateralsResponse}
     */
    PostLoansLoanIdCollateralsResponse,

    /**
     * The PostLoansLoanIdRequest model constructor.
     * @property {module:model/PostLoansLoanIdRequest}
     */
    PostLoansLoanIdRequest,

    /**
     * The PostLoansLoanIdResponse model constructor.
     * @property {module:model/PostLoansLoanIdResponse}
     */
    PostLoansLoanIdResponse,

    /**
     * The PostLoansLoanIdScheduleResponse model constructor.
     * @property {module:model/PostLoansLoanIdScheduleResponse}
     */
    PostLoansLoanIdScheduleResponse,

    /**
     * The PostLoansLoanIdTransactionsResponse model constructor.
     * @property {module:model/PostLoansLoanIdTransactionsResponse}
     */
    PostLoansLoanIdTransactionsResponse,

    /**
     * The PostLoansLoanIdTransactionsTransactionIdRequest model constructor.
     * @property {module:model/PostLoansLoanIdTransactionsTransactionIdRequest}
     */
    PostLoansLoanIdTransactionsTransactionIdRequest,

    /**
     * The PostLoansLoanIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/PostLoansLoanIdTransactionsTransactionIdResponse}
     */
    PostLoansLoanIdTransactionsTransactionIdResponse,

    /**
     * The PostLoansRepaymentSchedulePeriods model constructor.
     * @property {module:model/PostLoansRepaymentSchedulePeriods}
     */
    PostLoansRepaymentSchedulePeriods,

    /**
     * The PostLoansRequest model constructor.
     * @property {module:model/PostLoansRequest}
     */
    PostLoansRequest,

    /**
     * The PostLoansResponse model constructor.
     * @property {module:model/PostLoansResponse}
     */
    PostLoansResponse,

    /**
     * The PostMakerCheckersResponse model constructor.
     * @property {module:model/PostMakerCheckersResponse}
     */
    PostMakerCheckersResponse,

    /**
     * The PostNewShareApplicationResponse model constructor.
     * @property {module:model/PostNewShareApplicationResponse}
     */
    PostNewShareApplicationResponse,

    /**
     * The PostNewTransferResponse model constructor.
     * @property {module:model/PostNewTransferResponse}
     */
    PostNewTransferResponse,

    /**
     * The PostOfficesRequest model constructor.
     * @property {module:model/PostOfficesRequest}
     */
    PostOfficesRequest,

    /**
     * The PostOfficesResponse model constructor.
     * @property {module:model/PostOfficesResponse}
     */
    PostOfficesResponse,

    /**
     * The PostPaymentTypesRequest model constructor.
     * @property {module:model/PostPaymentTypesRequest}
     */
    PostPaymentTypesRequest,

    /**
     * The PostPaymentTypesResponse model constructor.
     * @property {module:model/PostPaymentTypesResponse}
     */
    PostPaymentTypesResponse,

    /**
     * The PostProductsChargesSelected model constructor.
     * @property {module:model/PostProductsChargesSelected}
     */
    PostProductsChargesSelected,

    /**
     * The PostProductsMarketPricePeriods model constructor.
     * @property {module:model/PostProductsMarketPricePeriods}
     */
    PostProductsMarketPricePeriods,

    /**
     * The PostProductsTypeRequest model constructor.
     * @property {module:model/PostProductsTypeRequest}
     */
    PostProductsTypeRequest,

    /**
     * The PostProductsTypeResponse model constructor.
     * @property {module:model/PostProductsTypeResponse}
     */
    PostProductsTypeResponse,

    /**
     * The PostProvisioningCriteriaRequest model constructor.
     * @property {module:model/PostProvisioningCriteriaRequest}
     */
    PostProvisioningCriteriaRequest,

    /**
     * The PostProvisioningCriteriaResponse model constructor.
     * @property {module:model/PostProvisioningCriteriaResponse}
     */
    PostProvisioningCriteriaResponse,

    /**
     * The PostProvisioningEntriesRequest model constructor.
     * @property {module:model/PostProvisioningEntriesRequest}
     */
    PostProvisioningEntriesRequest,

    /**
     * The PostProvisioningEntriesResponse model constructor.
     * @property {module:model/PostProvisioningEntriesResponse}
     */
    PostProvisioningEntriesResponse,

    /**
     * The PostRecurringChanges model constructor.
     * @property {module:model/PostRecurringChanges}
     */
    PostRecurringChanges,

    /**
     * The PostRecurringDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/PostRecurringDepositAccountsAccountIdResponse}
     */
    PostRecurringDepositAccountsAccountIdResponse,

    /**
     * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest model constructor.
     * @property {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest}
     */
    PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest,

    /**
     * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse model constructor.
     * @property {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse}
     */
    PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse,

    /**
     * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse model constructor.
     * @property {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse}
     */
    PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse,

    /**
     * The PostRecurringDepositAccountsRequest model constructor.
     * @property {module:model/PostRecurringDepositAccountsRequest}
     */
    PostRecurringDepositAccountsRequest,

    /**
     * The PostRecurringDepositAccountsResponse model constructor.
     * @property {module:model/PostRecurringDepositAccountsResponse}
     */
    PostRecurringDepositAccountsResponse,

    /**
     * The PostRecurringDepositProductsChartSlabs model constructor.
     * @property {module:model/PostRecurringDepositProductsChartSlabs}
     */
    PostRecurringDepositProductsChartSlabs,

    /**
     * The PostRecurringDepositProductsCharts model constructor.
     * @property {module:model/PostRecurringDepositProductsCharts}
     */
    PostRecurringDepositProductsCharts,

    /**
     * The PostRecurringDepositProductsRequest model constructor.
     * @property {module:model/PostRecurringDepositProductsRequest}
     */
    PostRecurringDepositProductsRequest,

    /**
     * The PostRecurringDepositProductsResponse model constructor.
     * @property {module:model/PostRecurringDepositProductsResponse}
     */
    PostRecurringDepositProductsResponse,

    /**
     * The PostReportMailingJobsRequest model constructor.
     * @property {module:model/PostReportMailingJobsRequest}
     */
    PostReportMailingJobsRequest,

    /**
     * The PostReportMailingJobsResponse model constructor.
     * @property {module:model/PostReportMailingJobsResponse}
     */
    PostReportMailingJobsResponse,

    /**
     * The PostReportsResponse model constructor.
     * @property {module:model/PostReportsResponse}
     */
    PostReportsResponse,

    /**
     * The PostRepostRequest model constructor.
     * @property {module:model/PostRepostRequest}
     */
    PostRepostRequest,

    /**
     * The PostResourceTypeResourceIdNotesRequest model constructor.
     * @property {module:model/PostResourceTypeResourceIdNotesRequest}
     */
    PostResourceTypeResourceIdNotesRequest,

    /**
     * The PostResourceTypeResourceIdNotesResponse model constructor.
     * @property {module:model/PostResourceTypeResourceIdNotesResponse}
     */
    PostResourceTypeResourceIdNotesResponse,

    /**
     * The PostRolesRequest model constructor.
     * @property {module:model/PostRolesRequest}
     */
    PostRolesRequest,

    /**
     * The PostRolesResponse model constructor.
     * @property {module:model/PostRolesResponse}
     */
    PostRolesResponse,

    /**
     * The PostRolesRoleIdPermissionsResponsePermissions model constructor.
     * @property {module:model/PostRolesRoleIdPermissionsResponsePermissions}
     */
    PostRolesRoleIdPermissionsResponsePermissions,

    /**
     * The PostRolesRoleIdResponse model constructor.
     * @property {module:model/PostRolesRoleIdResponse}
     */
    PostRolesRoleIdResponse,

    /**
     * The PostRunaccrualsRequest model constructor.
     * @property {module:model/PostRunaccrualsRequest}
     */
    PostRunaccrualsRequest,

    /**
     * The PostSavingsAccountsAccountIdRequest model constructor.
     * @property {module:model/PostSavingsAccountsAccountIdRequest}
     */
    PostSavingsAccountsAccountIdRequest,

    /**
     * The PostSavingsAccountsAccountIdResponse model constructor.
     * @property {module:model/PostSavingsAccountsAccountIdResponse}
     */
    PostSavingsAccountsAccountIdResponse,

    /**
     * The PostSavingsAccountsRequest model constructor.
     * @property {module:model/PostSavingsAccountsRequest}
     */
    PostSavingsAccountsRequest,

    /**
     * The PostSavingsAccountsResponse model constructor.
     * @property {module:model/PostSavingsAccountsResponse}
     */
    PostSavingsAccountsResponse,

    /**
     * The PostSavingsAccountsSavingsAccountIdChargesRequest model constructor.
     * @property {module:model/PostSavingsAccountsSavingsAccountIdChargesRequest}
     */
    PostSavingsAccountsSavingsAccountIdChargesRequest,

    /**
     * The PostSavingsAccountsSavingsAccountIdChargesResponse model constructor.
     * @property {module:model/PostSavingsAccountsSavingsAccountIdChargesResponse}
     */
    PostSavingsAccountsSavingsAccountIdChargesResponse,

    /**
     * The PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest model constructor.
     * @property {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest}
     */
    PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest,

    /**
     * The PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model constructor.
     * @property {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse,

    /**
     * The PostSavingsCharges model constructor.
     * @property {module:model/PostSavingsCharges}
     */
    PostSavingsCharges,

    /**
     * The PostSavingsProductsRequest model constructor.
     * @property {module:model/PostSavingsProductsRequest}
     */
    PostSavingsProductsRequest,

    /**
     * The PostSavingsProductsResponse model constructor.
     * @property {module:model/PostSavingsProductsResponse}
     */
    PostSavingsProductsResponse,

    /**
     * The PostSelfAuthenticationResponse model constructor.
     * @property {module:model/PostSelfAuthenticationResponse}
     */
    PostSelfAuthenticationResponse,

    /**
     * The PostSelfBeneficiariesTPTRequest model constructor.
     * @property {module:model/PostSelfBeneficiariesTPTRequest}
     */
    PostSelfBeneficiariesTPTRequest,

    /**
     * The PostSelfBeneficiariesTPTResponse model constructor.
     * @property {module:model/PostSelfBeneficiariesTPTResponse}
     */
    PostSelfBeneficiariesTPTResponse,

    /**
     * The PostSelfLoansData model constructor.
     * @property {module:model/PostSelfLoansData}
     */
    PostSelfLoansData,

    /**
     * The PostSelfLoansDatatables model constructor.
     * @property {module:model/PostSelfLoansDatatables}
     */
    PostSelfLoansDatatables,

    /**
     * The PostSelfLoansDisbursementData model constructor.
     * @property {module:model/PostSelfLoansDisbursementData}
     */
    PostSelfLoansDisbursementData,

    /**
     * The PostSelfLoansLoanIdChanges model constructor.
     * @property {module:model/PostSelfLoansLoanIdChanges}
     */
    PostSelfLoansLoanIdChanges,

    /**
     * The PostSelfLoansLoanIdRequest model constructor.
     * @property {module:model/PostSelfLoansLoanIdRequest}
     */
    PostSelfLoansLoanIdRequest,

    /**
     * The PostSelfLoansLoanIdResponse model constructor.
     * @property {module:model/PostSelfLoansLoanIdResponse}
     */
    PostSelfLoansLoanIdResponse,

    /**
     * The PostSelfLoansLoanIdStatus model constructor.
     * @property {module:model/PostSelfLoansLoanIdStatus}
     */
    PostSelfLoansLoanIdStatus,

    /**
     * The PostSelfLoansRequest model constructor.
     * @property {module:model/PostSelfLoansRequest}
     */
    PostSelfLoansRequest,

    /**
     * The PostSelfLoansResponse model constructor.
     * @property {module:model/PostSelfLoansResponse}
     */
    PostSelfLoansResponse,

    /**
     * The PostStaffRequest model constructor.
     * @property {module:model/PostStaffRequest}
     */
    PostStaffRequest,

    /**
     * The PostStaffResponse model constructor.
     * @property {module:model/PostStaffResponse}
     */
    PostStaffResponse,

    /**
     * The PostStandingInstructionsRequest model constructor.
     * @property {module:model/PostStandingInstructionsRequest}
     */
    PostStandingInstructionsRequest,

    /**
     * The PostStandingInstructionsResponse model constructor.
     * @property {module:model/PostStandingInstructionsResponse}
     */
    PostStandingInstructionsResponse,

    /**
     * The PostSurveySurveyNameApptableIdRequest model constructor.
     * @property {module:model/PostSurveySurveyNameApptableIdRequest}
     */
    PostSurveySurveyNameApptableIdRequest,

    /**
     * The PostSurveySurveyNameApptableIdResponse model constructor.
     * @property {module:model/PostSurveySurveyNameApptableIdResponse}
     */
    PostSurveySurveyNameApptableIdResponse,

    /**
     * The PostTaxesComponentsRequest model constructor.
     * @property {module:model/PostTaxesComponentsRequest}
     */
    PostTaxesComponentsRequest,

    /**
     * The PostTaxesComponentsResponse model constructor.
     * @property {module:model/PostTaxesComponentsResponse}
     */
    PostTaxesComponentsResponse,

    /**
     * The PostTaxesGroupRequest model constructor.
     * @property {module:model/PostTaxesGroupRequest}
     */
    PostTaxesGroupRequest,

    /**
     * The PostTaxesGroupResponse model constructor.
     * @property {module:model/PostTaxesGroupResponse}
     */
    PostTaxesGroupResponse,

    /**
     * The PostTaxesGroupTaxComponents model constructor.
     * @property {module:model/PostTaxesGroupTaxComponents}
     */
    PostTaxesGroupTaxComponents,

    /**
     * The PostTellersRequest model constructor.
     * @property {module:model/PostTellersRequest}
     */
    PostTellersRequest,

    /**
     * The PostTellersResponse model constructor.
     * @property {module:model/PostTellersResponse}
     */
    PostTellersResponse,

    /**
     * The PostTellersTellerIdCashiersCashierIdAllocateRequest model constructor.
     * @property {module:model/PostTellersTellerIdCashiersCashierIdAllocateRequest}
     */
    PostTellersTellerIdCashiersCashierIdAllocateRequest,

    /**
     * The PostTellersTellerIdCashiersCashierIdAllocateResponse model constructor.
     * @property {module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse}
     */
    PostTellersTellerIdCashiersCashierIdAllocateResponse,

    /**
     * The PostTellersTellerIdCashiersCashierIdSettleRequest model constructor.
     * @property {module:model/PostTellersTellerIdCashiersCashierIdSettleRequest}
     */
    PostTellersTellerIdCashiersCashierIdSettleRequest,

    /**
     * The PostTellersTellerIdCashiersCashierIdSettleResponse model constructor.
     * @property {module:model/PostTellersTellerIdCashiersCashierIdSettleResponse}
     */
    PostTellersTellerIdCashiersCashierIdSettleResponse,

    /**
     * The PostTellersTellerIdCashiersRequest model constructor.
     * @property {module:model/PostTellersTellerIdCashiersRequest}
     */
    PostTellersTellerIdCashiersRequest,

    /**
     * The PostTellersTellerIdCashiersResponse model constructor.
     * @property {module:model/PostTellersTellerIdCashiersResponse}
     */
    PostTellersTellerIdCashiersResponse,

    /**
     * The PostTemplatesRequest model constructor.
     * @property {module:model/PostTemplatesRequest}
     */
    PostTemplatesRequest,

    /**
     * The PostTemplatesResponse model constructor.
     * @property {module:model/PostTemplatesResponse}
     */
    PostTemplatesResponse,

    /**
     * The PostUsersRequest model constructor.
     * @property {module:model/PostUsersRequest}
     */
    PostUsersRequest,

    /**
     * The PostUsersResponse model constructor.
     * @property {module:model/PostUsersResponse}
     */
    PostUsersResponse,

    /**
     * The PostalAddress model constructor.
     * @property {module:model/PostalAddress}
     */
    PostalAddress,

    /**
     * The ProcessingResultLookup model constructor.
     * @property {module:model/ProcessingResultLookup}
     */
    ProcessingResultLookup,

    /**
     * The ProvisioningCriteriaDefinitionData model constructor.
     * @property {module:model/ProvisioningCriteriaDefinitionData}
     */
    ProvisioningCriteriaDefinitionData,

    /**
     * The ProvisioningEntryData model constructor.
     * @property {module:model/ProvisioningEntryData}
     */
    ProvisioningEntryData,

    /**
     * The PutAccountNumberFormatsRequest model constructor.
     * @property {module:model/PutAccountNumberFormatsRequest}
     */
    PutAccountNumberFormatsRequest,

    /**
     * The PutAccountNumberFormatsResponse model constructor.
     * @property {module:model/PutAccountNumberFormatsResponse}
     */
    PutAccountNumberFormatsResponse,

    /**
     * The PutAccountNumberFormatschangesSwagger model constructor.
     * @property {module:model/PutAccountNumberFormatschangesSwagger}
     */
    PutAccountNumberFormatschangesSwagger,

    /**
     * The PutAccountingRulesRequest model constructor.
     * @property {module:model/PutAccountingRulesRequest}
     */
    PutAccountingRulesRequest,

    /**
     * The PutAccountingRulesResponse model constructor.
     * @property {module:model/PutAccountingRulesResponse}
     */
    PutAccountingRulesResponse,

    /**
     * The PutAccountingRulesResponsechangesSwagger model constructor.
     * @property {module:model/PutAccountingRulesResponsechangesSwagger}
     */
    PutAccountingRulesResponsechangesSwagger,

    /**
     * The PutAccountsChanges model constructor.
     * @property {module:model/PutAccountsChanges}
     */
    PutAccountsChanges,

    /**
     * The PutAccountsTypeAccountIdRequest model constructor.
     * @property {module:model/PutAccountsTypeAccountIdRequest}
     */
    PutAccountsTypeAccountIdRequest,

    /**
     * The PutAccountsTypeAccountIdResponse model constructor.
     * @property {module:model/PutAccountsTypeAccountIdResponse}
     */
    PutAccountsTypeAccountIdResponse,

    /**
     * The PutCachechangesSwagger model constructor.
     * @property {module:model/PutCachechangesSwagger}
     */
    PutCachechangesSwagger,

    /**
     * The PutCachesRequest model constructor.
     * @property {module:model/PutCachesRequest}
     */
    PutCachesRequest,

    /**
     * The PutCachesResponse model constructor.
     * @property {module:model/PutCachesResponse}
     */
    PutCachesResponse,

    /**
     * The PutCentersCenterIdRequest model constructor.
     * @property {module:model/PutCentersCenterIdRequest}
     */
    PutCentersCenterIdRequest,

    /**
     * The PutCentersCenterIdResponse model constructor.
     * @property {module:model/PutCentersCenterIdResponse}
     */
    PutCentersCenterIdResponse,

    /**
     * The PutCentersChanges model constructor.
     * @property {module:model/PutCentersChanges}
     */
    PutCentersChanges,

    /**
     * The PutChargesChargeIdRequest model constructor.
     * @property {module:model/PutChargesChargeIdRequest}
     */
    PutChargesChargeIdRequest,

    /**
     * The PutChargesChargeIdResponse model constructor.
     * @property {module:model/PutChargesChargeIdResponse}
     */
    PutChargesChargeIdResponse,

    /**
     * The PutClientClientIdAddressesRequest model constructor.
     * @property {module:model/PutClientClientIdAddressesRequest}
     */
    PutClientClientIdAddressesRequest,

    /**
     * The PutClientClientIdAddressesResponse model constructor.
     * @property {module:model/PutClientClientIdAddressesResponse}
     */
    PutClientClientIdAddressesResponse,

    /**
     * The PutClientsClientIdIdentifiersIdentifierIdRequest model constructor.
     * @property {module:model/PutClientsClientIdIdentifiersIdentifierIdRequest}
     */
    PutClientsClientIdIdentifiersIdentifierIdRequest,

    /**
     * The PutClientsClientIdIdentifiersIdentifierIdResponse model constructor.
     * @property {module:model/PutClientsClientIdIdentifiersIdentifierIdResponse}
     */
    PutClientsClientIdIdentifiersIdentifierIdResponse,

    /**
     * The PutClientsClientIdRequest model constructor.
     * @property {module:model/PutClientsClientIdRequest}
     */
    PutClientsClientIdRequest,

    /**
     * The PutClientsClientIdResponse model constructor.
     * @property {module:model/PutClientsClientIdResponse}
     */
    PutClientsClientIdResponse,

    /**
     * The PutCodeValueDataResponse model constructor.
     * @property {module:model/PutCodeValueDataResponse}
     */
    PutCodeValueDataResponse,

    /**
     * The PutCodeValuechangesSwagger model constructor.
     * @property {module:model/PutCodeValuechangesSwagger}
     */
    PutCodeValuechangesSwagger,

    /**
     * The PutCodeValuesDataRequest model constructor.
     * @property {module:model/PutCodeValuesDataRequest}
     */
    PutCodeValuesDataRequest,

    /**
     * The PutCodesApichangesSwagger model constructor.
     * @property {module:model/PutCodesApichangesSwagger}
     */
    PutCodesApichangesSwagger,

    /**
     * The PutCodesRequest model constructor.
     * @property {module:model/PutCodesRequest}
     */
    PutCodesRequest,

    /**
     * The PutCodesResponse model constructor.
     * @property {module:model/PutCodesResponse}
     */
    PutCodesResponse,

    /**
     * The PutCurrenciesRequest model constructor.
     * @property {module:model/PutCurrenciesRequest}
     */
    PutCurrenciesRequest,

    /**
     * The PutCurrenciesResponse model constructor.
     * @property {module:model/PutCurrenciesResponse}
     */
    PutCurrenciesResponse,

    /**
     * The PutDataTablesAppTableIdDatatableIdRequest model constructor.
     * @property {module:model/PutDataTablesAppTableIdDatatableIdRequest}
     */
    PutDataTablesAppTableIdDatatableIdRequest,

    /**
     * The PutDataTablesAppTableIdDatatableIdResponse model constructor.
     * @property {module:model/PutDataTablesAppTableIdDatatableIdResponse}
     */
    PutDataTablesAppTableIdDatatableIdResponse,

    /**
     * The PutDataTablesAppTableIdRequest model constructor.
     * @property {module:model/PutDataTablesAppTableIdRequest}
     */
    PutDataTablesAppTableIdRequest,

    /**
     * The PutDataTablesAppTableIdResponse model constructor.
     * @property {module:model/PutDataTablesAppTableIdResponse}
     */
    PutDataTablesAppTableIdResponse,

    /**
     * The PutDataTablesAppTableIdResponseChanges model constructor.
     * @property {module:model/PutDataTablesAppTableIdResponseChanges}
     */
    PutDataTablesAppTableIdResponseChanges,

    /**
     * The PutDataTablesRequest model constructor.
     * @property {module:model/PutDataTablesRequest}
     */
    PutDataTablesRequest,

    /**
     * The PutDataTablesRequestAddColumns model constructor.
     * @property {module:model/PutDataTablesRequestAddColumns}
     */
    PutDataTablesRequestAddColumns,

    /**
     * The PutDataTablesRequestChangeColumns model constructor.
     * @property {module:model/PutDataTablesRequestChangeColumns}
     */
    PutDataTablesRequestChangeColumns,

    /**
     * The PutDataTablesRequestDropColumns model constructor.
     * @property {module:model/PutDataTablesRequestDropColumns}
     */
    PutDataTablesRequestDropColumns,

    /**
     * The PutDataTablesResponse model constructor.
     * @property {module:model/PutDataTablesResponse}
     */
    PutDataTablesResponse,

    /**
     * The PutEntityTypeEntityIdDocumentsResponse model constructor.
     * @property {module:model/PutEntityTypeEntityIdDocumentsResponse}
     */
    PutEntityTypeEntityIdDocumentsResponse,

    /**
     * The PutExternalServiceRequest model constructor.
     * @property {module:model/PutExternalServiceRequest}
     */
    PutExternalServiceRequest,

    /**
     * The PutFinancialActivityAccountsResponse model constructor.
     * @property {module:model/PutFinancialActivityAccountsResponse}
     */
    PutFinancialActivityAccountsResponse,

    /**
     * The PutFinancialActivityAccountscommentsSwagger model constructor.
     * @property {module:model/PutFinancialActivityAccountscommentsSwagger}
     */
    PutFinancialActivityAccountscommentsSwagger,

    /**
     * The PutFixedDepositAccountsAccountIdRequest model constructor.
     * @property {module:model/PutFixedDepositAccountsAccountIdRequest}
     */
    PutFixedDepositAccountsAccountIdRequest,

    /**
     * The PutFixedDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/PutFixedDepositAccountsAccountIdResponse}
     */
    PutFixedDepositAccountsAccountIdResponse,

    /**
     * The PutFixedDepositAccountsChanges model constructor.
     * @property {module:model/PutFixedDepositAccountsChanges}
     */
    PutFixedDepositAccountsChanges,

    /**
     * The PutFixedDepositProductsChanges model constructor.
     * @property {module:model/PutFixedDepositProductsChanges}
     */
    PutFixedDepositProductsChanges,

    /**
     * The PutFixedDepositProductsProductIdRequest model constructor.
     * @property {module:model/PutFixedDepositProductsProductIdRequest}
     */
    PutFixedDepositProductsProductIdRequest,

    /**
     * The PutFixedDepositProductsProductIdResponse model constructor.
     * @property {module:model/PutFixedDepositProductsProductIdResponse}
     */
    PutFixedDepositProductsProductIdResponse,

    /**
     * The PutFloatingRatesChanges model constructor.
     * @property {module:model/PutFloatingRatesChanges}
     */
    PutFloatingRatesChanges,

    /**
     * The PutFloatingRatesFloatingRateIdRequest model constructor.
     * @property {module:model/PutFloatingRatesFloatingRateIdRequest}
     */
    PutFloatingRatesFloatingRateIdRequest,

    /**
     * The PutFloatingRatesFloatingRateIdResponse model constructor.
     * @property {module:model/PutFloatingRatesFloatingRateIdResponse}
     */
    PutFloatingRatesFloatingRateIdResponse,

    /**
     * The PutFundsFundIdRequest model constructor.
     * @property {module:model/PutFundsFundIdRequest}
     */
    PutFundsFundIdRequest,

    /**
     * The PutFundsFundIdResponse model constructor.
     * @property {module:model/PutFundsFundIdResponse}
     */
    PutFundsFundIdResponse,

    /**
     * The PutGLAccountsRequest model constructor.
     * @property {module:model/PutGLAccountsRequest}
     */
    PutGLAccountsRequest,

    /**
     * The PutGLAccountsResponse model constructor.
     * @property {module:model/PutGLAccountsResponse}
     */
    PutGLAccountsResponse,

    /**
     * The PutGLAccountsResponsechangesSwagger model constructor.
     * @property {module:model/PutGLAccountsResponsechangesSwagger}
     */
    PutGLAccountsResponsechangesSwagger,

    /**
     * The PutGlClosuresRequest model constructor.
     * @property {module:model/PutGlClosuresRequest}
     */
    PutGlClosuresRequest,

    /**
     * The PutGlClosuresResponse model constructor.
     * @property {module:model/PutGlClosuresResponse}
     */
    PutGlClosuresResponse,

    /**
     * The PutGlobalConfigurationsRequest model constructor.
     * @property {module:model/PutGlobalConfigurationsRequest}
     */
    PutGlobalConfigurationsRequest,

    /**
     * The PutGlobalConfigurationsResponse model constructor.
     * @property {module:model/PutGlobalConfigurationsResponse}
     */
    PutGlobalConfigurationsResponse,

    /**
     * The PutGlobalConfigurationsResponsechangesSwagger model constructor.
     * @property {module:model/PutGlobalConfigurationsResponsechangesSwagger}
     */
    PutGlobalConfigurationsResponsechangesSwagger,

    /**
     * The PutGroupsGroupIdChanges model constructor.
     * @property {module:model/PutGroupsGroupIdChanges}
     */
    PutGroupsGroupIdChanges,

    /**
     * The PutGroupsGroupIdRequest model constructor.
     * @property {module:model/PutGroupsGroupIdRequest}
     */
    PutGroupsGroupIdRequest,

    /**
     * The PutGroupsGroupIdResponse model constructor.
     * @property {module:model/PutGroupsGroupIdResponse}
     */
    PutGroupsGroupIdResponse,

    /**
     * The PutHolidaysHolidayIdRequest model constructor.
     * @property {module:model/PutHolidaysHolidayIdRequest}
     */
    PutHolidaysHolidayIdRequest,

    /**
     * The PutHolidaysHolidayIdResponse model constructor.
     * @property {module:model/PutHolidaysHolidayIdResponse}
     */
    PutHolidaysHolidayIdResponse,

    /**
     * The PutHolidaysHolidayIdResponseChanges model constructor.
     * @property {module:model/PutHolidaysHolidayIdResponseChanges}
     */
    PutHolidaysHolidayIdResponseChanges,

    /**
     * The PutHookRequest model constructor.
     * @property {module:model/PutHookRequest}
     */
    PutHookRequest,

    /**
     * The PutHookResponse model constructor.
     * @property {module:model/PutHookResponse}
     */
    PutHookResponse,

    /**
     * The PutHookResponseChangesSwagger model constructor.
     * @property {module:model/PutHookResponseChangesSwagger}
     */
    PutHookResponseChangesSwagger,

    /**
     * The PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest model constructor.
     * @property {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest}
     */
    PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest,

    /**
     * The PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse model constructor.
     * @property {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse}
     */
    PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse,

    /**
     * The PutInterestRateChartsChartIdRequest model constructor.
     * @property {module:model/PutInterestRateChartsChartIdRequest}
     */
    PutInterestRateChartsChartIdRequest,

    /**
     * The PutInterestRateChartsChartIdResponse model constructor.
     * @property {module:model/PutInterestRateChartsChartIdResponse}
     */
    PutInterestRateChartsChartIdResponse,

    /**
     * The PutJobsJobIDRequest model constructor.
     * @property {module:model/PutJobsJobIDRequest}
     */
    PutJobsJobIDRequest,

    /**
     * The PutLoanChanges model constructor.
     * @property {module:model/PutLoanChanges}
     */
    PutLoanChanges,

    /**
     * The PutLoanProductsProductIdRequest model constructor.
     * @property {module:model/PutLoanProductsProductIdRequest}
     */
    PutLoanProductsProductIdRequest,

    /**
     * The PutLoanProductsProductIdResponse model constructor.
     * @property {module:model/PutLoanProductsProductIdResponse}
     */
    PutLoanProductsProductIdResponse,

    /**
     * The PutLoansLoanIdChanges model constructor.
     * @property {module:model/PutLoansLoanIdChanges}
     */
    PutLoansLoanIdChanges,

    /**
     * The PutLoansLoanIdChargesChargeIdRequest model constructor.
     * @property {module:model/PutLoansLoanIdChargesChargeIdRequest}
     */
    PutLoansLoanIdChargesChargeIdRequest,

    /**
     * The PutLoansLoanIdChargesChargeIdResponse model constructor.
     * @property {module:model/PutLoansLoanIdChargesChargeIdResponse}
     */
    PutLoansLoanIdChargesChargeIdResponse,

    /**
     * The PutLoansLoanIdCollateralsCollateralIdResponse model constructor.
     * @property {module:model/PutLoansLoanIdCollateralsCollateralIdResponse}
     */
    PutLoansLoanIdCollateralsCollateralIdResponse,

    /**
     * The PutLoansLoanIdRequest model constructor.
     * @property {module:model/PutLoansLoanIdRequest}
     */
    PutLoansLoanIdRequest,

    /**
     * The PutLoansLoanIdResponse model constructor.
     * @property {module:model/PutLoansLoanIdResponse}
     */
    PutLoansLoanIdResponse,

    /**
     * The PutLoansLoandIdCollateralsCollateralIdRequest model constructor.
     * @property {module:model/PutLoansLoandIdCollateralsCollateralIdRequest}
     */
    PutLoansLoandIdCollateralsCollateralIdRequest,

    /**
     * The PutNotesChanges model constructor.
     * @property {module:model/PutNotesChanges}
     */
    PutNotesChanges,

    /**
     * The PutOfficesOfficeIdRequest model constructor.
     * @property {module:model/PutOfficesOfficeIdRequest}
     */
    PutOfficesOfficeIdRequest,

    /**
     * The PutOfficesOfficeIdResponse model constructor.
     * @property {module:model/PutOfficesOfficeIdResponse}
     */
    PutOfficesOfficeIdResponse,

    /**
     * The PutOfficesOfficeIdResponseChanges model constructor.
     * @property {module:model/PutOfficesOfficeIdResponseChanges}
     */
    PutOfficesOfficeIdResponseChanges,

    /**
     * The PutPasswordPreferencesTemplateRequest model constructor.
     * @property {module:model/PutPasswordPreferencesTemplateRequest}
     */
    PutPasswordPreferencesTemplateRequest,

    /**
     * The PutPaymentTypesPaymentTypeIdRequest model constructor.
     * @property {module:model/PutPaymentTypesPaymentTypeIdRequest}
     */
    PutPaymentTypesPaymentTypeIdRequest,

    /**
     * The PutPaymentTypesPaymentTypeIdResponse model constructor.
     * @property {module:model/PutPaymentTypesPaymentTypeIdResponse}
     */
    PutPaymentTypesPaymentTypeIdResponse,

    /**
     * The PutPermissionsRequest model constructor.
     * @property {module:model/PutPermissionsRequest}
     */
    PutPermissionsRequest,

    /**
     * The PutProductsChanges model constructor.
     * @property {module:model/PutProductsChanges}
     */
    PutProductsChanges,

    /**
     * The PutProductsTypeProductIdRequest model constructor.
     * @property {module:model/PutProductsTypeProductIdRequest}
     */
    PutProductsTypeProductIdRequest,

    /**
     * The PutProductsTypeProductIdResponse model constructor.
     * @property {module:model/PutProductsTypeProductIdResponse}
     */
    PutProductsTypeProductIdResponse,

    /**
     * The PutProvisioningCriteriaRequest model constructor.
     * @property {module:model/PutProvisioningCriteriaRequest}
     */
    PutProvisioningCriteriaRequest,

    /**
     * The PutProvisioningCriteriaResponse model constructor.
     * @property {module:model/PutProvisioningCriteriaResponse}
     */
    PutProvisioningCriteriaResponse,

    /**
     * The PutProvisioningCriteriaResponseChanges model constructor.
     * @property {module:model/PutProvisioningCriteriaResponseChanges}
     */
    PutProvisioningCriteriaResponseChanges,

    /**
     * The PutProvisioningEntriesRequest model constructor.
     * @property {module:model/PutProvisioningEntriesRequest}
     */
    PutProvisioningEntriesRequest,

    /**
     * The PutProvisioningEntriesResponse model constructor.
     * @property {module:model/PutProvisioningEntriesResponse}
     */
    PutProvisioningEntriesResponse,

    /**
     * The PutRecurringDepositAccountsAccountIdRequest model constructor.
     * @property {module:model/PutRecurringDepositAccountsAccountIdRequest}
     */
    PutRecurringDepositAccountsAccountIdRequest,

    /**
     * The PutRecurringDepositAccountsAccountIdResponse model constructor.
     * @property {module:model/PutRecurringDepositAccountsAccountIdResponse}
     */
    PutRecurringDepositAccountsAccountIdResponse,

    /**
     * The PutRecurringDepositAccountsChanges model constructor.
     * @property {module:model/PutRecurringDepositAccountsChanges}
     */
    PutRecurringDepositAccountsChanges,

    /**
     * The PutRecurringDepositProductsChanges model constructor.
     * @property {module:model/PutRecurringDepositProductsChanges}
     */
    PutRecurringDepositProductsChanges,

    /**
     * The PutRecurringDepositProductsRequest model constructor.
     * @property {module:model/PutRecurringDepositProductsRequest}
     */
    PutRecurringDepositProductsRequest,

    /**
     * The PutRecurringDepositProductsResponse model constructor.
     * @property {module:model/PutRecurringDepositProductsResponse}
     */
    PutRecurringDepositProductsResponse,

    /**
     * The PutReportMailingJobsRequest model constructor.
     * @property {module:model/PutReportMailingJobsRequest}
     */
    PutReportMailingJobsRequest,

    /**
     * The PutReportMailingJobsResponse model constructor.
     * @property {module:model/PutReportMailingJobsResponse}
     */
    PutReportMailingJobsResponse,

    /**
     * The PutReportMailingJobsResponseChanges model constructor.
     * @property {module:model/PutReportMailingJobsResponseChanges}
     */
    PutReportMailingJobsResponseChanges,

    /**
     * The PutReportRequest model constructor.
     * @property {module:model/PutReportRequest}
     */
    PutReportRequest,

    /**
     * The PutReportResponse model constructor.
     * @property {module:model/PutReportResponse}
     */
    PutReportResponse,

    /**
     * The PutReportResponseChanges model constructor.
     * @property {module:model/PutReportResponseChanges}
     */
    PutReportResponseChanges,

    /**
     * The PutResourceTypeResourceIdNotesNoteIdRequest model constructor.
     * @property {module:model/PutResourceTypeResourceIdNotesNoteIdRequest}
     */
    PutResourceTypeResourceIdNotesNoteIdRequest,

    /**
     * The PutResourceTypeResourceIdNotesNoteIdResponse model constructor.
     * @property {module:model/PutResourceTypeResourceIdNotesNoteIdResponse}
     */
    PutResourceTypeResourceIdNotesNoteIdResponse,

    /**
     * The PutRolesRoleIdPermissionsRequest model constructor.
     * @property {module:model/PutRolesRoleIdPermissionsRequest}
     */
    PutRolesRoleIdPermissionsRequest,

    /**
     * The PutRolesRoleIdPermissionsResponse model constructor.
     * @property {module:model/PutRolesRoleIdPermissionsResponse}
     */
    PutRolesRoleIdPermissionsResponse,

    /**
     * The PutRolesRoleIdRequest model constructor.
     * @property {module:model/PutRolesRoleIdRequest}
     */
    PutRolesRoleIdRequest,

    /**
     * The PutRolesRoleIdResponse model constructor.
     * @property {module:model/PutRolesRoleIdResponse}
     */
    PutRolesRoleIdResponse,

    /**
     * The PutRolesRoleIdResponseChanges model constructor.
     * @property {module:model/PutRolesRoleIdResponseChanges}
     */
    PutRolesRoleIdResponseChanges,

    /**
     * The PutSavingsAccountsAccountIdRequest model constructor.
     * @property {module:model/PutSavingsAccountsAccountIdRequest}
     */
    PutSavingsAccountsAccountIdRequest,

    /**
     * The PutSavingsAccountsAccountIdResponse model constructor.
     * @property {module:model/PutSavingsAccountsAccountIdResponse}
     */
    PutSavingsAccountsAccountIdResponse,

    /**
     * The PutSavingsAccountsChanges model constructor.
     * @property {module:model/PutSavingsAccountsChanges}
     */
    PutSavingsAccountsChanges,

    /**
     * The PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest model constructor.
     * @property {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest}
     */
    PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest,

    /**
     * The PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model constructor.
     * @property {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse}
     */
    PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse,

    /**
     * The PutSavingsChanges model constructor.
     * @property {module:model/PutSavingsChanges}
     */
    PutSavingsChanges,

    /**
     * The PutSavingsProductsProductIdRequest model constructor.
     * @property {module:model/PutSavingsProductsProductIdRequest}
     */
    PutSavingsProductsProductIdRequest,

    /**
     * The PutSavingsProductsProductIdResponse model constructor.
     * @property {module:model/PutSavingsProductsProductIdResponse}
     */
    PutSavingsProductsProductIdResponse,

    /**
     * The PutSelfBeneficiariesChanges model constructor.
     * @property {module:model/PutSelfBeneficiariesChanges}
     */
    PutSelfBeneficiariesChanges,

    /**
     * The PutSelfBeneficiariesTPTBeneficiaryIdRequest model constructor.
     * @property {module:model/PutSelfBeneficiariesTPTBeneficiaryIdRequest}
     */
    PutSelfBeneficiariesTPTBeneficiaryIdRequest,

    /**
     * The PutSelfBeneficiariesTPTBeneficiaryIdResponse model constructor.
     * @property {module:model/PutSelfBeneficiariesTPTBeneficiaryIdResponse}
     */
    PutSelfBeneficiariesTPTBeneficiaryIdResponse,

    /**
     * The PutSelfLoansChanges model constructor.
     * @property {module:model/PutSelfLoansChanges}
     */
    PutSelfLoansChanges,

    /**
     * The PutSelfLoansLoanIdRequest model constructor.
     * @property {module:model/PutSelfLoansLoanIdRequest}
     */
    PutSelfLoansLoanIdRequest,

    /**
     * The PutSelfLoansLoanIdResponse model constructor.
     * @property {module:model/PutSelfLoansLoanIdResponse}
     */
    PutSelfLoansLoanIdResponse,

    /**
     * The PutSelfUserChanges model constructor.
     * @property {module:model/PutSelfUserChanges}
     */
    PutSelfUserChanges,

    /**
     * The PutSelfUserRequest model constructor.
     * @property {module:model/PutSelfUserRequest}
     */
    PutSelfUserRequest,

    /**
     * The PutSelfUserResponse model constructor.
     * @property {module:model/PutSelfUserResponse}
     */
    PutSelfUserResponse,

    /**
     * The PutStaffRequest model constructor.
     * @property {module:model/PutStaffRequest}
     */
    PutStaffRequest,

    /**
     * The PutStaffResponse model constructor.
     * @property {module:model/PutStaffResponse}
     */
    PutStaffResponse,

    /**
     * The PutStandingInstructionsStandingInstructionIdRequest model constructor.
     * @property {module:model/PutStandingInstructionsStandingInstructionIdRequest}
     */
    PutStandingInstructionsStandingInstructionIdRequest,

    /**
     * The PutStandingInstructionsStandingInstructionIdResponse model constructor.
     * @property {module:model/PutStandingInstructionsStandingInstructionIdResponse}
     */
    PutStandingInstructionsStandingInstructionIdResponse,

    /**
     * The PutTaxesComponentsChanges model constructor.
     * @property {module:model/PutTaxesComponentsChanges}
     */
    PutTaxesComponentsChanges,

    /**
     * The PutTaxesComponentsTaxComponentIdRequest model constructor.
     * @property {module:model/PutTaxesComponentsTaxComponentIdRequest}
     */
    PutTaxesComponentsTaxComponentIdRequest,

    /**
     * The PutTaxesComponentsTaxComponentIdResponse model constructor.
     * @property {module:model/PutTaxesComponentsTaxComponentIdResponse}
     */
    PutTaxesComponentsTaxComponentIdResponse,

    /**
     * The PutTaxesGroupChanges model constructor.
     * @property {module:model/PutTaxesGroupChanges}
     */
    PutTaxesGroupChanges,

    /**
     * The PutTaxesGroupModifiedComponents model constructor.
     * @property {module:model/PutTaxesGroupModifiedComponents}
     */
    PutTaxesGroupModifiedComponents,

    /**
     * The PutTaxesGroupTaxComponents model constructor.
     * @property {module:model/PutTaxesGroupTaxComponents}
     */
    PutTaxesGroupTaxComponents,

    /**
     * The PutTaxesGroupTaxGroupIdRequest model constructor.
     * @property {module:model/PutTaxesGroupTaxGroupIdRequest}
     */
    PutTaxesGroupTaxGroupIdRequest,

    /**
     * The PutTaxesGroupTaxGroupIdResponse model constructor.
     * @property {module:model/PutTaxesGroupTaxGroupIdResponse}
     */
    PutTaxesGroupTaxGroupIdResponse,

    /**
     * The PutTellersRequest model constructor.
     * @property {module:model/PutTellersRequest}
     */
    PutTellersRequest,

    /**
     * The PutTellersResponse model constructor.
     * @property {module:model/PutTellersResponse}
     */
    PutTellersResponse,

    /**
     * The PutTellersResponseChanges model constructor.
     * @property {module:model/PutTellersResponseChanges}
     */
    PutTellersResponseChanges,

    /**
     * The PutTellersTellerIdCashiersCashierIdRequest model constructor.
     * @property {module:model/PutTellersTellerIdCashiersCashierIdRequest}
     */
    PutTellersTellerIdCashiersCashierIdRequest,

    /**
     * The PutTellersTellerIdCashiersCashierIdResponse model constructor.
     * @property {module:model/PutTellersTellerIdCashiersCashierIdResponse}
     */
    PutTellersTellerIdCashiersCashierIdResponse,

    /**
     * The PutTellersTellerIdCashiersCashierIdResponseChanges model constructor.
     * @property {module:model/PutTellersTellerIdCashiersCashierIdResponseChanges}
     */
    PutTellersTellerIdCashiersCashierIdResponseChanges,

    /**
     * The PutTemplatesTemplateIdRequest model constructor.
     * @property {module:model/PutTemplatesTemplateIdRequest}
     */
    PutTemplatesTemplateIdRequest,

    /**
     * The PutTemplatesTemplateIdResponse model constructor.
     * @property {module:model/PutTemplatesTemplateIdResponse}
     */
    PutTemplatesTemplateIdResponse,

    /**
     * The PutUpdateStandingInstructionChanges model constructor.
     * @property {module:model/PutUpdateStandingInstructionChanges}
     */
    PutUpdateStandingInstructionChanges,

    /**
     * The PutUsersUserIdRequest model constructor.
     * @property {module:model/PutUsersUserIdRequest}
     */
    PutUsersUserIdRequest,

    /**
     * The PutUsersUserIdResponse model constructor.
     * @property {module:model/PutUsersUserIdResponse}
     */
    PutUsersUserIdResponse,

    /**
     * The PutUsersUserIdResponseChanges model constructor.
     * @property {module:model/PutUsersUserIdResponseChanges}
     */
    PutUsersUserIdResponseChanges,

    /**
     * The PutWorkingDaysRequest model constructor.
     * @property {module:model/PutWorkingDaysRequest}
     */
    PutWorkingDaysRequest,

    /**
     * The PutWorkingDaysResponse model constructor.
     * @property {module:model/PutWorkingDaysResponse}
     */
    PutWorkingDaysResponse,

    /**
     * The Question model constructor.
     * @property {module:model/Question}
     */
    Question,

    /**
     * The QuestionData model constructor.
     * @property {module:model/QuestionData}
     */
    QuestionData,

    /**
     * The Rate model constructor.
     * @property {module:model/Rate}
     */
    Rate,

    /**
     * The ReportMailingJobRunHistoryData model constructor.
     * @property {module:model/ReportMailingJobRunHistoryData}
     */
    ReportMailingJobRunHistoryData,

    /**
     * The Response model constructor.
     * @property {module:model/Response}
     */
    Response,

    /**
     * The ResponseData model constructor.
     * @property {module:model/ResponseData}
     */
    ResponseData,

    /**
     * The ResultsetColumnHeaderData model constructor.
     * @property {module:model/ResultsetColumnHeaderData}
     */
    ResultsetColumnHeaderData,

    /**
     * The ResultsetRowData model constructor.
     * @property {module:model/ResultsetRowData}
     */
    ResultsetRowData,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The RoleData model constructor.
     * @property {module:model/RoleData}
     */
    RoleData,

    /**
     * The SavingsProductData model constructor.
     * @property {module:model/SavingsProductData}
     */
    SavingsProductData,

    /**
     * The Scorecard model constructor.
     * @property {module:model/Scorecard}
     */
    Scorecard,

    /**
     * The ScorecardData model constructor.
     * @property {module:model/ScorecardData}
     */
    ScorecardData,

    /**
     * The ScorecardValue model constructor.
     * @property {module:model/ScorecardValue}
     */
    ScorecardValue,

    /**
     * The SingleDebitOrCreditEntryCommand model constructor.
     * @property {module:model/SingleDebitOrCreditEntryCommand}
     */
    SingleDebitOrCreditEntryCommand,

    /**
     * The SmsCampaignData model constructor.
     * @property {module:model/SmsCampaignData}
     */
    SmsCampaignData,

    /**
     * The Staff model constructor.
     * @property {module:model/Staff}
     */
    Staff,

    /**
     * The StaffData model constructor.
     * @property {module:model/StaffData}
     */
    StaffData,

    /**
     * The SubjectName model constructor.
     * @property {module:model/SubjectName}
     */
    SubjectName,

    /**
     * The Survey model constructor.
     * @property {module:model/Survey}
     */
    Survey,

    /**
     * The SurveyData model constructor.
     * @property {module:model/SurveyData}
     */
    SurveyData,

    /**
     * The TaxComponent model constructor.
     * @property {module:model/TaxComponent}
     */
    TaxComponent,

    /**
     * The TaxComponentHistory model constructor.
     * @property {module:model/TaxComponentHistory}
     */
    TaxComponentHistory,

    /**
     * The TaxGroup model constructor.
     * @property {module:model/TaxGroup}
     */
    TaxGroup,

    /**
     * The TaxGroupMappings model constructor.
     * @property {module:model/TaxGroupMappings}
     */
    TaxGroupMappings,

    /**
     * The TemplateMapper model constructor.
     * @property {module:model/TemplateMapper}
     */
    TemplateMapper,

    /**
    * The AccountNumberFormatApi service constructor.
    * @property {module:api/AccountNumberFormatApi}
    */
    AccountNumberFormatApi,

    /**
    * The AccountTransfersApi service constructor.
    * @property {module:api/AccountTransfersApi}
    */
    AccountTransfersApi,

    /**
    * The AccountingClosureApi service constructor.
    * @property {module:api/AccountingClosureApi}
    */
    AccountingClosureApi,

    /**
    * The AccountingRulesApi service constructor.
    * @property {module:api/AccountingRulesApi}
    */
    AccountingRulesApi,

    /**
    * The AdhocQueryApiApi service constructor.
    * @property {module:api/AdhocQueryApiApi}
    */
    AdhocQueryApiApi,

    /**
    * The AuditsApi service constructor.
    * @property {module:api/AuditsApi}
    */
    AuditsApi,

    /**
    * The AuthenticationHTTPBasicApi service constructor.
    * @property {module:api/AuthenticationHTTPBasicApi}
    */
    AuthenticationHTTPBasicApi,

    /**
    * The BatchAPIApi service constructor.
    * @property {module:api/BatchAPIApi}
    */
    BatchAPIApi,

    /**
    * The CacheApi service constructor.
    * @property {module:api/CacheApi}
    */
    CacheApi,

    /**
    * The CashierJournalsApi service constructor.
    * @property {module:api/CashierJournalsApi}
    */
    CashierJournalsApi,

    /**
    * The CashiersApi service constructor.
    * @property {module:api/CashiersApi}
    */
    CashiersApi,

    /**
    * The CentersApi service constructor.
    * @property {module:api/CentersApi}
    */
    CentersApi,

    /**
    * The ChargesApi service constructor.
    * @property {module:api/ChargesApi}
    */
    ChargesApi,

    /**
    * The ClientApi service constructor.
    * @property {module:api/ClientApi}
    */
    ClientApi,

    /**
    * The ClientChargesApi service constructor.
    * @property {module:api/ClientChargesApi}
    */
    ClientChargesApi,

    /**
    * The ClientIdentifierApi service constructor.
    * @property {module:api/ClientIdentifierApi}
    */
    ClientIdentifierApi,

    /**
    * The ClientTransactionApi service constructor.
    * @property {module:api/ClientTransactionApi}
    */
    ClientTransactionApi,

    /**
    * The ClientsAddressApi service constructor.
    * @property {module:api/ClientsAddressApi}
    */
    ClientsAddressApi,

    /**
    * The CodeValuesApi service constructor.
    * @property {module:api/CodeValuesApi}
    */
    CodeValuesApi,

    /**
    * The CodesApi service constructor.
    * @property {module:api/CodesApi}
    */
    CodesApi,

    /**
    * The CurrencyApi service constructor.
    * @property {module:api/CurrencyApi}
    */
    CurrencyApi,

    /**
    * The DataTablesApi service constructor.
    * @property {module:api/DataTablesApi}
    */
    DataTablesApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The EntityDataTableApi service constructor.
    * @property {module:api/EntityDataTableApi}
    */
    EntityDataTableApi,

    /**
    * The EntityFieldConfigurationApi service constructor.
    * @property {module:api/EntityFieldConfigurationApi}
    */
    EntityFieldConfigurationApi,

    /**
    * The ExternalServicesApi service constructor.
    * @property {module:api/ExternalServicesApi}
    */
    ExternalServicesApi,

    /**
    * The FetchAuthenticatedUserDetailsApi service constructor.
    * @property {module:api/FetchAuthenticatedUserDetailsApi}
    */
    FetchAuthenticatedUserDetailsApi,

    /**
    * The FixedDepositAccountApi service constructor.
    * @property {module:api/FixedDepositAccountApi}
    */
    FixedDepositAccountApi,

    /**
    * The FixedDepositProductApi service constructor.
    * @property {module:api/FixedDepositProductApi}
    */
    FixedDepositProductApi,

    /**
    * The FloatingRatesApi service constructor.
    * @property {module:api/FloatingRatesApi}
    */
    FloatingRatesApi,

    /**
    * The GeneralLedgerAccountApi service constructor.
    * @property {module:api/GeneralLedgerAccountApi}
    */
    GeneralLedgerAccountApi,

    /**
    * The GlobalConfigurationApi service constructor.
    * @property {module:api/GlobalConfigurationApi}
    */
    GlobalConfigurationApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The HolidaysApi service constructor.
    * @property {module:api/HolidaysApi}
    */
    HolidaysApi,

    /**
    * The HooksApi service constructor.
    * @property {module:api/HooksApi}
    */
    HooksApi,

    /**
    * The InterestRateChartApi service constructor.
    * @property {module:api/InterestRateChartApi}
    */
    InterestRateChartApi,

    /**
    * The InterestRateSlabAKAInterestBandsApi service constructor.
    * @property {module:api/InterestRateSlabAKAInterestBandsApi}
    */
    InterestRateSlabAKAInterestBandsApi,

    /**
    * The JournalEntriesApi service constructor.
    * @property {module:api/JournalEntriesApi}
    */
    JournalEntriesApi,

    /**
    * The ListReportMailingJobHistoryApi service constructor.
    * @property {module:api/ListReportMailingJobHistoryApi}
    */
    ListReportMailingJobHistoryApi,

    /**
    * The LoanChargesApi service constructor.
    * @property {module:api/LoanChargesApi}
    */
    LoanChargesApi,

    /**
    * The LoanCollateralApi service constructor.
    * @property {module:api/LoanCollateralApi}
    */
    LoanCollateralApi,

    /**
    * The LoanProductsApi service constructor.
    * @property {module:api/LoanProductsApi}
    */
    LoanProductsApi,

    /**
    * The LoanReschedulingApi service constructor.
    * @property {module:api/LoanReschedulingApi}
    */
    LoanReschedulingApi,

    /**
    * The LoanTransactionsApi service constructor.
    * @property {module:api/LoanTransactionsApi}
    */
    LoanTransactionsApi,

    /**
    * The LoansApi service constructor.
    * @property {module:api/LoansApi}
    */
    LoansApi,

    /**
    * The MIFOSXBATCHJOBSApi service constructor.
    * @property {module:api/MIFOSXBATCHJOBSApi}
    */
    MIFOSXBATCHJOBSApi,

    /**
    * The MakerCheckerOr4EyeFunctionalityApi service constructor.
    * @property {module:api/MakerCheckerOr4EyeFunctionalityApi}
    */
    MakerCheckerOr4EyeFunctionalityApi,

    /**
    * The MappingFinancialActivitiesToAccountsApi service constructor.
    * @property {module:api/MappingFinancialActivitiesToAccountsApi}
    */
    MappingFinancialActivitiesToAccountsApi,

    /**
    * The MixMappingApi service constructor.
    * @property {module:api/MixMappingApi}
    */
    MixMappingApi,

    /**
    * The MixReportApi service constructor.
    * @property {module:api/MixReportApi}
    */
    MixReportApi,

    /**
    * The MixTaxonomyApi service constructor.
    * @property {module:api/MixTaxonomyApi}
    */
    MixTaxonomyApi,

    /**
    * The NotesApi service constructor.
    * @property {module:api/NotesApi}
    */
    NotesApi,

    /**
    * The NotificationApi service constructor.
    * @property {module:api/NotificationApi}
    */
    NotificationApi,

    /**
    * The OfficesApi service constructor.
    * @property {module:api/OfficesApi}
    */
    OfficesApi,

    /**
    * The PasswordPreferencesApi service constructor.
    * @property {module:api/PasswordPreferencesApi}
    */
    PasswordPreferencesApi,

    /**
    * The PaymentTypeApi service constructor.
    * @property {module:api/PaymentTypeApi}
    */
    PaymentTypeApi,

    /**
    * The PeriodicAccrualAccountingApi service constructor.
    * @property {module:api/PeriodicAccrualAccountingApi}
    */
    PeriodicAccrualAccountingApi,

    /**
    * The PermissionsApi service constructor.
    * @property {module:api/PermissionsApi}
    */
    PermissionsApi,

    /**
    * The PocketApi service constructor.
    * @property {module:api/PocketApi}
    */
    PocketApi,

    /**
    * The ProvisioningCategoryApi service constructor.
    * @property {module:api/ProvisioningCategoryApi}
    */
    ProvisioningCategoryApi,

    /**
    * The ProvisioningCriteriaApi service constructor.
    * @property {module:api/ProvisioningCriteriaApi}
    */
    ProvisioningCriteriaApi,

    /**
    * The ProvisioningEntriesApi service constructor.
    * @property {module:api/ProvisioningEntriesApi}
    */
    ProvisioningEntriesApi,

    /**
    * The RecurringDepositAccountApi service constructor.
    * @property {module:api/RecurringDepositAccountApi}
    */
    RecurringDepositAccountApi,

    /**
    * The RecurringDepositAccountTransactionsApi service constructor.
    * @property {module:api/RecurringDepositAccountTransactionsApi}
    */
    RecurringDepositAccountTransactionsApi,

    /**
    * The RecurringDepositProductApi service constructor.
    * @property {module:api/RecurringDepositProductApi}
    */
    RecurringDepositProductApi,

    /**
    * The ReportMailingJobsApi service constructor.
    * @property {module:api/ReportMailingJobsApi}
    */
    ReportMailingJobsApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:api/ReportsApi}
    */
    ReportsApi,

    /**
    * The RolesApi service constructor.
    * @property {module:api/RolesApi}
    */
    RolesApi,

    /**
    * The RunReportsApi service constructor.
    * @property {module:api/RunReportsApi}
    */
    RunReportsApi,

    /**
    * The SPMAPILookUpTableApi service constructor.
    * @property {module:api/SPMAPILookUpTableApi}
    */
    SPMAPILookUpTableApi,

    /**
    * The SavingsAccountApi service constructor.
    * @property {module:api/SavingsAccountApi}
    */
    SavingsAccountApi,

    /**
    * The SavingsChargesApi service constructor.
    * @property {module:api/SavingsChargesApi}
    */
    SavingsChargesApi,

    /**
    * The SavingsProductApi service constructor.
    * @property {module:api/SavingsProductApi}
    */
    SavingsProductApi,

    /**
    * The SchedulerApi service constructor.
    * @property {module:api/SchedulerApi}
    */
    SchedulerApi,

    /**
    * The ScoreCardApi service constructor.
    * @property {module:api/ScoreCardApi}
    */
    ScoreCardApi,

    /**
    * The SearchAPIApi service constructor.
    * @property {module:api/SearchAPIApi}
    */
    SearchAPIApi,

    /**
    * The SelfAccountTransferApi service constructor.
    * @property {module:api/SelfAccountTransferApi}
    */
    SelfAccountTransferApi,

    /**
    * The SelfAuthenticationApi service constructor.
    * @property {module:api/SelfAuthenticationApi}
    */
    SelfAuthenticationApi,

    /**
    * The SelfClientApi service constructor.
    * @property {module:api/SelfClientApi}
    */
    SelfClientApi,

    /**
    * The SelfDividendApi service constructor.
    * @property {module:api/SelfDividendApi}
    */
    SelfDividendApi,

    /**
    * The SelfLoanProductsApi service constructor.
    * @property {module:api/SelfLoanProductsApi}
    */
    SelfLoanProductsApi,

    /**
    * The SelfLoansApi service constructor.
    * @property {module:api/SelfLoansApi}
    */
    SelfLoansApi,

    /**
    * The SelfRunReportApi service constructor.
    * @property {module:api/SelfRunReportApi}
    */
    SelfRunReportApi,

    /**
    * The SelfSavingsAccountApi service constructor.
    * @property {module:api/SelfSavingsAccountApi}
    */
    SelfSavingsAccountApi,

    /**
    * The SelfScoreCardApi service constructor.
    * @property {module:api/SelfScoreCardApi}
    */
    SelfScoreCardApi,

    /**
    * The SelfServiceRegistrationApi service constructor.
    * @property {module:api/SelfServiceRegistrationApi}
    */
    SelfServiceRegistrationApi,

    /**
    * The SelfShareAccountsApi service constructor.
    * @property {module:api/SelfShareAccountsApi}
    */
    SelfShareAccountsApi,

    /**
    * The SelfSpmApi service constructor.
    * @property {module:api/SelfSpmApi}
    */
    SelfSpmApi,

    /**
    * The SelfThirdPartyTransferApi service constructor.
    * @property {module:api/SelfThirdPartyTransferApi}
    */
    SelfThirdPartyTransferApi,

    /**
    * The SelfUserApi service constructor.
    * @property {module:api/SelfUserApi}
    */
    SelfUserApi,

    /**
    * The SelfUserDetailsApi service constructor.
    * @property {module:api/SelfUserDetailsApi}
    */
    SelfUserDetailsApi,

    /**
    * The ShareAccountApi service constructor.
    * @property {module:api/ShareAccountApi}
    */
    ShareAccountApi,

    /**
    * The SpmSurveysApi service constructor.
    * @property {module:api/SpmSurveysApi}
    */
    SpmSurveysApi,

    /**
    * The StaffApi service constructor.
    * @property {module:api/StaffApi}
    */
    StaffApi,

    /**
    * The StandingInstructionsApi service constructor.
    * @property {module:api/StandingInstructionsApi}
    */
    StandingInstructionsApi,

    /**
    * The StandingInstructionsHistoryApi service constructor.
    * @property {module:api/StandingInstructionsHistoryApi}
    */
    StandingInstructionsHistoryApi,

    /**
    * The TaxComponentsApi service constructor.
    * @property {module:api/TaxComponentsApi}
    */
    TaxComponentsApi,

    /**
    * The TaxGroupApi service constructor.
    * @property {module:api/TaxGroupApi}
    */
    TaxGroupApi,

    /**
    * The TellerCashManagementApi service constructor.
    * @property {module:api/TellerCashManagementApi}
    */
    TellerCashManagementApi,

    /**
    * The UserGeneratedDocumentsApi service constructor.
    * @property {module:api/UserGeneratedDocumentsApi}
    */
    UserGeneratedDocumentsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WorkingDaysApi service constructor.
    * @property {module:api/WorkingDaysApi}
    */
    WorkingDaysApi
};
