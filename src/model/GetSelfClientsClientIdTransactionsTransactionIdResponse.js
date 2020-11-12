

import ApiClient from '../ApiClient';
import GetSelfClientsClientIdTransactionsType from './GetSelfClientsClientIdTransactionsType';
import GetSelfClientsSavingsAccountsCurrency from './GetSelfClientsSavingsAccountsCurrency';

/**
 * The GetSelfClientsClientIdTransactionsTransactionIdResponse model module.
 * @module model/GetSelfClientsClientIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class GetSelfClientsClientIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdTransactionsTransactionIdResponse</code>.
     * GetSelfClientsClientIdTransactionsTransactionIdResponse
     * @alias module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdTransactionsTransactionIdResponse} The populated <code>GetSelfClientsClientIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdTransactionsTransactionIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetSelfClientsClientIdTransactionsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfClientsSavingsAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('reversed')) {
                obj['reversed'] = ApiClient.convertToType(data['reversed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetSelfClientsClientIdTransactionsType} type
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['date'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsCurrency} currency
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['amount'] = undefined;

/**
 * @member {Date} submittedOnDate
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['submittedOnDate'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetSelfClientsClientIdTransactionsTransactionIdResponse.prototype['reversed'] = undefined;






export default GetSelfClientsClientIdTransactionsTransactionIdResponse;

