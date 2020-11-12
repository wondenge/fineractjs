

import ApiClient from '../ApiClient';
import GetLoansTotal from './GetLoansTotal';
import GetLoansTransactionType from './GetLoansTransactionType';

/**
 * The GetLoansLoanIdTransactionsTemplateResponse model module.
 * @module model/GetLoansLoanIdTransactionsTemplateResponse
 * @version 1.0
 */
class GetLoansLoanIdTransactionsTemplateResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdTransactionsTemplateResponse</code>.
     * GetLoansLoanIdTransactionsTemplateResponse
     * @alias module:model/GetLoansLoanIdTransactionsTemplateResponse
     */
    constructor() { 
        
        GetLoansLoanIdTransactionsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdTransactionsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdTransactionsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdTransactionsTemplateResponse} The populated <code>GetLoansLoanIdTransactionsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdTransactionsTemplateResponse();

            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = GetLoansTransactionType.constructFromObject(data['transactionType']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = GetLoansTotal.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoansTransactionType} transactionType
 */
GetLoansLoanIdTransactionsTemplateResponse.prototype['transactionType'] = undefined;

/**
 * @member {Date} date
 */
GetLoansLoanIdTransactionsTemplateResponse.prototype['date'] = undefined;

/**
 * @member {module:model/GetLoansTotal} total
 */
GetLoansLoanIdTransactionsTemplateResponse.prototype['total'] = undefined;






export default GetLoansLoanIdTransactionsTemplateResponse;

