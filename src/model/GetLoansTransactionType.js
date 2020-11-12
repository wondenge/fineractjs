

import ApiClient from '../ApiClient';

/**
 * The GetLoansTransactionType model module.
 * @module model/GetLoansTransactionType
 * @version 1.0
 */
class GetLoansTransactionType {
    /**
     * Constructs a new <code>GetLoansTransactionType</code>.
     * @alias module:model/GetLoansTransactionType
     */
    constructor() { 
        
        GetLoansTransactionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansTransactionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansTransactionType} obj Optional instance to populate.
     * @return {module:model/GetLoansTransactionType} The populated <code>GetLoansTransactionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansTransactionType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansTransactionType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansTransactionType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansTransactionType.prototype['description'] = undefined;






export default GetLoansTransactionType;

