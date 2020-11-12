

import ApiClient from '../ApiClient';

/**
 * The InteropIdentifierRequestData model module.
 * @module model/InteropIdentifierRequestData
 * @version 1.0
 */
class InteropIdentifierRequestData {
    /**
     * Constructs a new <code>InteropIdentifierRequestData</code>.
     * @alias module:model/InteropIdentifierRequestData
     * @param idType {module:model/InteropIdentifierRequestData.IdTypeEnum} 
     * @param idValue {String} 
     * @param accountId {String} 
     */
    constructor(idType, idValue, accountId) { 
        
        InteropIdentifierRequestData.initialize(this, idType, idValue, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, idType, idValue, accountId) { 
        obj['idType'] = idType;
        obj['idValue'] = idValue;
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>InteropIdentifierRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropIdentifierRequestData} obj Optional instance to populate.
     * @return {module:model/InteropIdentifierRequestData} The populated <code>InteropIdentifierRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropIdentifierRequestData();

            if (data.hasOwnProperty('idType')) {
                obj['idType'] = ApiClient.convertToType(data['idType'], 'String');
            }
            if (data.hasOwnProperty('idValue')) {
                obj['idValue'] = ApiClient.convertToType(data['idValue'], 'String');
            }
            if (data.hasOwnProperty('subIdOrType')) {
                obj['subIdOrType'] = ApiClient.convertToType(data['subIdOrType'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InteropIdentifierRequestData.IdTypeEnum} idType
 */
InteropIdentifierRequestData.prototype['idType'] = undefined;

/**
 * @member {String} idValue
 */
InteropIdentifierRequestData.prototype['idValue'] = undefined;

/**
 * @member {String} subIdOrType
 */
InteropIdentifierRequestData.prototype['subIdOrType'] = undefined;

/**
 * @member {String} accountId
 */
InteropIdentifierRequestData.prototype['accountId'] = undefined;





/**
 * Allowed values for the <code>idType</code> property.
 * @enum {String}
 * @readonly
 */
InteropIdentifierRequestData['IdTypeEnum'] = {

    /**
     * value: "MSISDN"
     * @const
     */
    "MSISDN": "MSISDN",

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL",

    /**
     * value: "PERSONAL_ID"
     * @const
     */
    "PERSONAL_ID": "PERSONAL_ID",

    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",

    /**
     * value: "DEVICE"
     * @const
     */
    "DEVICE": "DEVICE",

    /**
     * value: "ACCOUNT_ID"
     * @const
     */
    "ACCOUNT_ID": "ACCOUNT_ID",

    /**
     * value: "IBAN"
     * @const
     */
    "IBAN": "IBAN",

    /**
     * value: "ALIAS"
     * @const
     */
    "ALIAS": "ALIAS"
};



export default InteropIdentifierRequestData;

