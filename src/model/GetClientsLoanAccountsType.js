

import ApiClient from '../ApiClient';

/**
 * The GetClientsLoanAccountsType model module.
 * @module model/GetClientsLoanAccountsType
 * @version 1.0
 */
class GetClientsLoanAccountsType {
    /**
     * Constructs a new <code>GetClientsLoanAccountsType</code>.
     * @alias module:model/GetClientsLoanAccountsType
     */
    constructor() { 
        
        GetClientsLoanAccountsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsLoanAccountsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsLoanAccountsType} obj Optional instance to populate.
     * @return {module:model/GetClientsLoanAccountsType} The populated <code>GetClientsLoanAccountsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsLoanAccountsType();

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
GetClientsLoanAccountsType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientsLoanAccountsType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetClientsLoanAccountsType.prototype['description'] = undefined;






export default GetClientsLoanAccountsType;

