

import ApiClient from '../ApiClient';

/**
 * The GetSelfClientsClientIdTransactionsType model module.
 * @module model/GetSelfClientsClientIdTransactionsType
 * @version 1.0
 */
class GetSelfClientsClientIdTransactionsType {
    /**
     * Constructs a new <code>GetSelfClientsClientIdTransactionsType</code>.
     * @alias module:model/GetSelfClientsClientIdTransactionsType
     */
    constructor() { 
        
        GetSelfClientsClientIdTransactionsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdTransactionsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdTransactionsType} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdTransactionsType} The populated <code>GetSelfClientsClientIdTransactionsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdTransactionsType();

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
GetSelfClientsClientIdTransactionsType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfClientsClientIdTransactionsType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfClientsClientIdTransactionsType.prototype['description'] = undefined;






export default GetSelfClientsClientIdTransactionsType;

