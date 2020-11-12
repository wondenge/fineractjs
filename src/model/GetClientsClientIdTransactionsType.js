

import ApiClient from '../ApiClient';

/**
 * The GetClientsClientIdTransactionsType model module.
 * @module model/GetClientsClientIdTransactionsType
 * @version 1.0
 */
class GetClientsClientIdTransactionsType {
    /**
     * Constructs a new <code>GetClientsClientIdTransactionsType</code>.
     * @alias module:model/GetClientsClientIdTransactionsType
     */
    constructor() { 
        
        GetClientsClientIdTransactionsType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdTransactionsType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdTransactionsType} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdTransactionsType} The populated <code>GetClientsClientIdTransactionsType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdTransactionsType();

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
GetClientsClientIdTransactionsType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetClientsClientIdTransactionsType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetClientsClientIdTransactionsType.prototype['description'] = undefined;






export default GetClientsClientIdTransactionsType;

