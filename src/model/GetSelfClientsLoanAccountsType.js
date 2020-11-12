

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsLoanAccountsType model module.
 * @module model/GetSelfClientsLoanAccountsType
 * @version 1.0
 */
class GetSelfClientsLoanAccountsType {
    /**
     * Constructs a new <code>GetSelfClientsLoanAccountsType</code>.
     * @alias module:model/GetSelfClientsLoanAccountsType
     */
    constructor() { 
        
        GetSelfClientsLoanAccountsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsLoanAccountsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsLoanAccountsType} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsLoanAccountsType} The populated <code>GetSelfClientsLoanAccountsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsLoanAccountsType();

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
GetSelfClientsLoanAccountsType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsLoanAccountsType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsLoanAccountsType.prototype['description'] = undefined;






export default GetSelfClientsLoanAccountsType;

